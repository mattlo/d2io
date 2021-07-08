import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {css} from 'react-emotion';
import uniqBy from 'lodash/uniqBy';
import debounce from 'lodash/debounce';
import {useGlobalState} from '../../../hooks/useGlobalState';
import {getManifest, getProfile} from '../../../api/bungieApi';
import {setComponentContent, setManifest} from '../../../state/actions/manifest';
import {setProfile} from '../../../state/actions/profile';
import axios from 'axios';
import {
  Divider,
  FormGroup,
  HTMLSelect,
  ProgressBar,
  Slider,
  Spinner,
  Switch
} from '@blueprintjs/core';
import {CLASS_TYPE_HUNTER, CLASS_TYPE_TITAN, CLASS_TYPE_WARLOCK} from '../../../constants';
import {filterAndCategorize, getInventoryContent} from '../../../util/inventoryUtil';
import {
  getStatBuild, presetList
} from '../../../util/presetUtil';
import ItemDisplay from '../../ItemDisplay/ItemDisplay';

export default function LoadoutOptimizerPage() {
  const {state, dispatch} = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState('PvP');
  const [mainClass, setMainClass] = useState('');
  const [exotic, setExotic] = useState('');
  const [minMobility, setFastMinMobility] = useState(50);
  const [minResilience, setFastMinResilience] = useState(10);
  const [minRecovery, setFastMinRecovery] = useState(60);
  const [minDiscipline, setFastMinDiscipline] = useState(1);
  const [minIntelligence, setFastMinIntelligence] = useState(1);
  const [minStrength, setFastMinStrength] = useState(1);

  const [minDebounceMobility, setDebounceMinMobility] = useState(minMobility);
  const [minDebounceResilience, setDebounceMinResilience] = useState(minResilience);
  const [minDebounceRecovery, setDebounceMinRecovery] = useState(minRecovery);
  const [minDebounceDiscipline, setDebounceMinDiscipline] = useState(minDiscipline);
  const [minDebounceIntelligence, setDebounceMinIntelligence] = useState(minIntelligence);
  const [minDebounceStrength, setDebounceMinStrength] = useState(minStrength);

  const setMinMobility = useMemo(() => debounce(setDebounceMinMobility, 900), []);
  const setMinResilience = useMemo(() => debounce(setDebounceMinResilience, 900), []);
  const setMinRecovery = useMemo(() => (debounce(setDebounceMinRecovery, 900)), []);
  const setMinStrength = useMemo(() => (debounce(setDebounceMinStrength, 900)), []);
  const setMinIntelligence = useMemo(() => (debounce(setDebounceMinIntelligence, 900)), []);
  const setMinDiscipline = useMemo(() => (debounce(setDebounceMinDiscipline, 900)), []);

  const onDragContainerRef = (node : any) => {
    if (node) {
      node.addEventListener('touchmove', function (e : any) {
        e.preventDefault();
      }, {passive: false});
    }
  }

  // // get data
  useEffect(() => {
    // setIsLoading(false);
    // return;

    // if there's a version, do nothings
    if (state.manifest.version) {
      setIsLoading(false);
      return;
    }

    Promise.all([
      getProfile(state.userAuth),
      getManifest()
    ])
      .then(([profile, manifest]) => {
        dispatch(setManifest({
          contentPath: manifest.data.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition,
          version: manifest.data.Response.version
        }));

        dispatch(setProfile({
          data: profile.data.Response
        }));

        return Promise.all([
          axios({
            url: `https://www.bungie.net${manifest.data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemLiteDefinition}`
          }),
          axios({
            url: `https://www.bungie.net${manifest.data.Response.jsonWorldComponentContentPaths.en.DestinyPowerCapDefinition}`
          })
        ]);
      })
      .then(([res, powerCapRes]) => {
        dispatch(setComponentContent({
          ...res.data,
          powercaps: powerCapRes.data
        }))
        setIsLoading(false);
      });
  }, [state.userAuth, state.manifest, setIsLoading]);

  const onModeChange = useCallback((e) => setMode(e.target.value), []);
  const onMainClassChange = useCallback((e) => {
    setMainClass(e.target.value);
    setExotic('')
  }, []);
  const onExotic = useCallback((e) => setExotic(e.target.value), []);

  const inventoryData = useMemo(() => {
    if (
      !state.profile.data
      || !state.profile.data.profileInventory
      || Object.keys(state.componentContent).length === 0
    ) {
      return [];
    }

    return getInventoryContent(
      state.profile.data,
      state.componentContent
    )
  }, [state.profile, state.componentContent]);

  const categorizedItems = useMemo(() => (
    filterAndCategorize({
      powerCap: 1260,
      exoticItem: inventoryData.filter(i => i.itemHash.toString() === exotic.toString())[0] || {},
      items: inventoryData,
      mainClass
    })
  ), [inventoryData, mainClass, exotic]);

  const exotics = uniqBy(
    inventoryData.filter(i => i.exotic && i.classType.toString() === mainClass.toString()),
    item => item.itemHash
  );

  const {helmets, gauntlets, chests, legs} = categorizedItems;

  const filterFn = useCallback((items : any[], totalFloor = 220) => {
    const {
      mobility,
      recovery,
      discipline,
      intellect,
      strength,
      total,
      resilience
    } = getStatBuild(items);

    return (
      mobility >= minDebounceMobility &&
      resilience >= minDebounceResilience &&
      recovery >= minDebounceRecovery &&
      intellect >= minDebounceIntelligence &&
      strength >= minDebounceStrength &&
      discipline >= minDebounceDiscipline &&
      total >= totalFloor
    )
  }, [
    minDebounceMobility,
    minDebounceResilience,
    minDebounceRecovery,
    minDebounceDiscipline,
    minDebounceIntelligence,
    minDebounceStrength
  ]);

  const combos : any[] = useMemo(() => {
    const items : any = [];
    let preset : any;

    const presetItem = presetList.find(([name]) => name === mode);
    preset = presetItem ? presetItem[1] : () => true;

    helmets.forEach((helmet : any) => {
      gauntlets.forEach((gauntlet : any) => {
        chests.forEach((chest : any) => {
          legs.forEach((leg : any) => {
            const set = [helmet, gauntlet, chest, leg];
            if (filterFn(set)) {
              items.push(({
                set,
                stats: getStatBuild(set)
              }));
            }
          });
        });
      });
    });

    return items.sort((a : any, b : any) => b.stats.total - a.stats.total);
  }, [helmets, gauntlets, chests, legs, mode, filterFn]);

  if (isLoading && inventoryData.length === 0) {
    return (
      <div style={{display: 'flex', padding: 15, justifyContent: 'center'}}>
        <div style={{maxWidth: 500, width: '100%', textAlign: 'center'}}>
          <Spinner tagName="span" />
          <br />
          Loading profile data...
        </div>
      </div>
    )
  }

  const total = minMobility + minResilience + minRecovery + minDiscipline + minIntelligence + minStrength;
  const ratio = total / 280;

  const getPerfectionIntent = () => {
    if (combos.length === 0) {
      return undefined;
    }

    if (ratio <= 0.3) {
      return 'primary';
    }

    if (ratio <= 0.55) {
      return 'success';
    }

    if (ratio <= 1) {
      return 'warning';
    }

    if (ratio > 1) {
      return 'danger';
    }
  };

  return (
    <div style={{padding: 15}}>
      <div style={{maxWidth: 700}}>
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <div>
            <FormGroup label="Class">
              <HTMLSelect
                options={[
                  {label: '', value: ''},
                  {label: 'Titan', value: CLASS_TYPE_TITAN},
                  {label: 'Hunter', value: CLASS_TYPE_HUNTER},
                  {label: 'Warlock', value: CLASS_TYPE_WARLOCK}
                ]}
                onChange={onMainClassChange}
                value={mainClass}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup label="Type">
              <HTMLSelect
                options={['PvP', 'PvE']}
                value={mode}
                onChange={onModeChange}
              />
            </FormGroup>
          </div>
          <div style={{display: mainClass === '' ? 'none' : 'block'}}>
            <FormGroup label="Exotic">
              <HTMLSelect
                options={[
                  {label: '-- No Exotic --', value: ''},
                  ...exotics.map(item => ({
                    label: item.content.displayProperties.name,
                    value: item.itemHash
                  }))
                ]}
                onChange={onExotic}
                value={exotic}
              />
            </FormGroup>
          </div>
        </div>

        <div style={{margin: '15px 0', display: mainClass === '' ? 'none' : 'block'}}>
          <FormGroup
            label={(
              <div>
                Perfection Meter

                <strong>
                  {ratio <= 1 ? ` (${Math.round(total / 280 * 100)}%)` : '🚨 Too Much!'}
                </strong>

                {' '}

                {combos.length > 0 && (
                  <>
                    {ratio >= 0.91 && ratio <= 1 && (
                      <div>
                        <strong>
                          High stat territory.
                        </strong>
                      </div>
                    )}
                  </>
                )}

                {combos.length === 0 && ratio <= 1 && (
                  <>
                    {' 😥 no results, get better gear'}
                  </>
                )}
              </div>
            )}
          >
            <ProgressBar
              value={ratio}
              intent={getPerfectionIntent()}
              animate={false}
              stripes={false}
            />
          </FormGroup>

        </div>

        <div
          style={{flexWrap: 'wrap', gap: '20px', display: mainClass === '' ? 'none' : 'flex'}}
        >
          {[
            ['Base Min Mobility', minMobility, (n : number) => {
              setMinMobility(n);
              setFastMinMobility(n)
            }],
            ['Base Min Resilience', minResilience, (n : number) => {
              setMinResilience(n);
              setFastMinResilience(n);
            }],
            ['Base Min Recovery', minRecovery, (n : number) => {
              setMinRecovery(n);
              setFastMinRecovery(n);
            }],
            ['Base Min Discipline', minDiscipline, (n : number) => {
              setMinDiscipline(n);
              setFastMinDiscipline(n);
            }],
            ['Base Min Intelligence', minIntelligence, (n : number) => {
              setMinIntelligence(n);
              setFastMinIntelligence(n);
            }],
            ['Base Min Strength', minStrength, (n : number) => {
              setMinStrength(n);
              setFastMinStrength(n);
            }],
          ].map(([label, value, onChange] : any) => (
            <div
              style={{flex: '0 0 45%', padding: '5px'}}
              key={label}
            >
              <FormGroup label={label}>
                <div ref={onDragContainerRef}>
                  <Slider
                    min={0}
                    max={100}
                    stepSize={1}
                    labelStepSize={25}
                    onChange={onChange}
                    value={value}
                  />
                </div>

              </FormGroup>
            </div>
          ))}
        </div>

        <Divider style={{'borderColor': '#333', margin: '20px 0'}} />
      </div>

      <div style={{display: mainClass === '' ? 'none' : 'block'}}>
        Results: {combos.length.toLocaleString()} (only showing top 250)
        <br />
      </div>

      <div
        style={{transform: 'translateZ(0)', display: mainClass === '' ? 'none' : 'block'}}
      >
        {mode && combos.filter((x : any, i : number) => i < 250).map(({set, stats}, index) => (
          <ItemDisplay
            key={index}
            items={set}
            stats={stats}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
}
