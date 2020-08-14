import React from 'react';
import {css} from 'react-emotion';

const divider = '---------------------------------------------------';
const width = divider.length;

export default function ItemDisplay({items, stats} : any) {
  return (
    <pre
      className={css`
        font-family: monospace;
        color: #fff;
        background: #000;
        width: 500px;
        padding: 10px;
      `}
    >
      {`| ${'Stat Total'.padEnd(13, '.')}${stats.total} (max: 280)`.padEnd(width - 1) + '|'}
      <br />
      {`| `.padEnd(width - 1) + '|'}
      <br />
      {items.map((item : any, index : any) => {
        const statItems = [
          ['Mobility', item.mobility],
          ['Resilience', item.resilience],
          ['Recovery', item.recovery],
          ['Discipline', item.discipline],
          ['Intellect', item.intellect],
          ['Strength', item.strength],
        ];

        const total = statItems.reduce((o : any, a : any) => o + a[1], 0);
        const statString = statItems.map(([a, b] : any) => `${a.substr(0, 3)} ${b}`).join('  ');

        return (
          <div key={index}>
            {`| [${item.content.itemTypeDisplayName}] ${item.content.displayProperties.name} (${total})`.padEnd(width - 1) + '|'}
            <br />
            {`| ${statString}`.padEnd(width - 1) + '|'}
          </div>
        );
      })}
    </pre>
  )
}
