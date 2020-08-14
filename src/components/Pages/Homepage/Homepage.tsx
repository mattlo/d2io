import React from 'react';
import {AnchorButton} from '@blueprintjs/core';

export default function Homepage() {
  return (
    <div>
      <AnchorButton href="https://www.bungie.net/en/OAuth/Authorize?client_id=3770&response_type=code">
        Sync Destiny 2 Characters
      </AnchorButton>
    </div>
  );
}
