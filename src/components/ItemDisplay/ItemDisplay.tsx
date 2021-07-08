import React from 'react';
import {css} from 'react-emotion';
import {getStatBuild} from '../../util/presetUtil';

const divider = '---------------------------------------------------';
const width = divider.length;

export default function ItemDisplay({items, stats, mode} : any) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience,
    total
  } = stats;

  const isPvP = mode.indexOf('PvP') >= 0;

  const totalStats = [
    ['Mobility', mobility, isPvP ? 30 : 10],
    ['Resilience', resilience, 10],
    ['Recovery', recovery, 10],
    ['Discipline', discipline, 10],
    ['Intellect', intellect, 10],
    ['Strength', strength, isPvP ? 30 : 10],
  ];


  return (
    <pre
      className={css`
        font-family: monospace;
        color: #fff;
        background: #000;
        width: 500px;
        padding: 10px 10px 10px 0;
        overflow-x: auto;
        width: 100%;
        
        @media (max-width: 500px) {
          font-size: 14px;
        }
      `}
    >

      {`| ${'Stat Total'.padEnd(13, '.')}${total} (max: 280)`.padEnd(width - 1) + '|'}
      <br />
      {totalStats.map(([statName, stat, bonus]) => (
        <div key={statName}>
          {`| ${statName.padEnd(13, '.')}${stat} (${stat+bonus})`.padEnd(width - 1) + '|'}
        </div>
      ))}
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
