import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {css} from 'react-emotion';
import uniqBy from 'lodash/uniqBy';
import {useGlobalState} from '../../../hooks/useGlobalState';
import {getManifest, getProfile} from '../../../api/bungieApi';
import {setComponentContent, setManifest} from '../../../state/actions/manifest';
import {setProfile} from '../../../state/actions/profile';
import axios from 'axios';
import {FormGroup, HTMLSelect, Spinner} from '@blueprintjs/core';
import {CLASS_TYPE_HUNTER, CLASS_TYPE_TITAN, CLASS_TYPE_WARLOCK} from '../../../constants';
import {filterAndCategorize, getInventoryContent} from '../../../util/inventoryUtil';
import {
  getStatBuild, presetList
} from '../../../util/presetUtil';
import ItemDisplay from '../../ItemDisplay/ItemDisplay';

export default function LoadoutOptimizerPage() {
  const {state, dispatch} = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState('No Optimization');
  const [mainClass, setMainClass] = useState('');
  const [exotic, setExotic] = useState('');

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

  const categorizedItems = filterAndCategorize({
    powerCap: 1260,
    exoticItem: inventoryData.filter(i => i.itemHash.toString() === exotic.toString())[0] || {},
    items: inventoryData,
    mainClass
  })

  const exotics = uniqBy(
    inventoryData.filter(i => i.exotic && i.classType.toString() === mainClass.toString()),
    item => item.itemHash
  );

  const {helmets, gauntlets, chests, legs} = categorizedItems;

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
            if (preset && preset(set)) {
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
  }, [helmets, gauntlets, chests, legs, mode]);

  if (isLoading && inventoryData.length === 0) {
    return (
      <div>
        <Spinner className={css`justify-content: flex-start;`} />
        Loading profile data...
      </div>
    )
  }

  return (
    <div style={{padding: 15}}>
      <div style={{width: 320}}>
        <FormGroup label="Optimizer Presets">
          <HTMLSelect
            options={presetList.map(([name]) => name) as string[]}
            onChange={onModeChange}
            value={mode}
          />
        </FormGroup>
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
        <hr />
      </div>

      <div>
        Results: {combos.length.toLocaleString()} (only showing top 1,000)
        <br />
      </div>

      {mode && combos.filter((x : any, i : number) => i < 1000).map(({set, stats}, index) => (
        <ItemDisplay
          key={index}
          items={set}
          stats={stats}
          mode={mode}
        />
      ))}
    </div>
  );
}
