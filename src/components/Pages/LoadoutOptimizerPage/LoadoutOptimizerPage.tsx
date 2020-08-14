import React, {useEffect, useState} from 'react';
import {useGlobalState} from '../../../hooks/useGlobalState';
import {getManifest, getProfile} from '../../../api/bungieApi';
import {setComponentContent, setManifest} from '../../../state/actions/manifest';
import {setProfile} from '../../../state/actions/profile';
import axios from 'axios';

export default function LoadoutOptimizerPage() {
  const {state, dispatch} = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);

  // get data
  useEffect(() => {
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


        return axios({
          url: `https://www.bungie.net${manifest.data.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition}`
        });
      })
      .then((res) => {
        dispatch(setComponentContent(res.data))
        setIsLoading(false);
      });
  }, [state.userAuth, state.manifest, setIsLoading]);

  console.log(state);

  if (isLoading) {
    return (
      <div>
        Loading profile data...
      </div>
    )
  }

  return (
    <div>
      loadout optimizer page test2
    </div>
  );
}
