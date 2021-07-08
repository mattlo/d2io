import React from 'react';
import {AnchorButton, Divider} from '@blueprintjs/core';

export default function Homepage() {
  return (
    <div style={{display: 'flex', padding: 15, justifyContent: 'center'}}>
      <div style={{maxWidth: 500, width: '100%'}}>
        <div style={{textAlign: 'center'}}>
          <h1>
            Destiny 2 Item Optimizer
          </h1>

          <p>
            Find the best armor combination throughout your collection.
          </p>

          <br />

          <AnchorButton
            intent="primary"
            href="https://www.bungie.net/en/OAuth/Authorize?client_id=3770&response_type=code"
            large
          >
            Sync Destiny 2 Characters
          </AnchorButton>

          <Divider style={{borderColor: '#333', margin: '25px 0'}} />

          Created by [XBOX] Mastuh Matt, AKA: Throwing Knife God.
          <br />
          <br />
        </div>

        <div style={{paddingBottom: `${Math.round(9 / 16 * 100)}%`, position: 'relative'}}>
          <iframe
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
              left: 0
            }}
            src="https://www.youtube.com/embed/ztwefM1QItY"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>
    </div>
  );
}
