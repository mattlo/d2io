import {
  STAT_TYPE_DISCIPLINE,
  STAT_TYPE_INTELLECT,
  STAT_TYPE_MOBILITY, STAT_TYPE_RECOVERY, STAT_TYPE_RESILIENCE,
  STAT_TYPE_STRENGTH
} from '../constants';

export interface Item {

}

function shouldAddItem(exoticItem : any, item : any) {
  // must be an exotic and a constant must be set (no constant leads to multi-exotic load outs)
  // if a constant exists, non exotics of this type must be omitted
  if (exoticItem.itemHash && item.exotic) {
    if (item.itemHash === exoticItem.itemHash) {
      return true;
    }

    return false;
  }

  // filter anything that is taking up the same exotic slot
  if (exoticItem.itemHash && !item.exotic && exoticItem.content.itemTypeDisplayName === item.content.itemTypeDisplayName) {
    return false;
  }

  // if no hash is defined, exclude exotics from the pool
  if (!exoticItem.hash && item.exotic) {
    return false;
  }

  return true;
}

export function filterAndCategorize({powerCap, exoticItem, items, mainClass} : any) {
  const helmets : any = [];
  const gauntlets : any = [];
  const chests : any = [];
  const legs : any = [];

  if (items.length === 0) {
    return {helmets, gauntlets, chests, legs};
  }

  if (mainClass === '') {
    return {helmets, gauntlets, chests, legs};
  }

  items
    // filter by powercap
    .filter((item : any) => item.powerCap >= powerCap)
    // filter by class
    .filter((item : any) => item.classType.toString() === mainClass.toString())
    // map each item
    .forEach((item : any) => {
      switch (item.content.itemTypeDisplayName) {
        case 'Helmet':
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          shouldAddItem(exoticItem, item) ? helmets.push(item) : null;
          break;
        case 'Gauntlets':
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          shouldAddItem(exoticItem, item) ? gauntlets.push(item) : null;
          break;
        case 'Chest Armor':
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          shouldAddItem(exoticItem, item) ? chests.push(item) : null;
          break;
        case 'Leg Armor':
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          shouldAddItem(exoticItem, item) ? legs.push(item) : null;
          break;
      }
    });

  return {helmets, gauntlets, chests, legs};
}

export function getInventoryContent(profile : any, contentMap : any) {
  const vaultInventory = profile.profileInventory.data.items;
  const characterInventories = Object.keys(profile.characterInventories.data)
    .map(key => profile.characterInventories.data[key].items);

  const stats = profile.itemComponents.stats.data;

  const items = [
    ...vaultInventory,
    ...characterInventories
  ];

  return items
    .filter(item => (
      item.itemInstanceId
      && contentMap[item.itemHash].equippingBlock
      && contentMap[item.itemHash].quality
      // must have an armor stat
      && stats[item.itemInstanceId].stats[STAT_TYPE_INTELLECT]
    ))
    .map(item => ({
      ...item,
      content: contentMap[item.itemHash],
      exotic: contentMap[item.itemHash].equippingBlock.uniqueLabel === 'exotic_armor',
      classType: contentMap[item.itemHash].classType,
      powerCap: contentMap.powercaps[contentMap[item.itemHash].quality.versions[0].powerCapHash].powerCap,
      intellect: stats[item.itemInstanceId].stats[STAT_TYPE_INTELLECT].value,
      mobility: stats[item.itemInstanceId].stats[STAT_TYPE_MOBILITY].value,
      strength: stats[item.itemInstanceId].stats[STAT_TYPE_STRENGTH].value,
      discipline: stats[item.itemInstanceId].stats[STAT_TYPE_DISCIPLINE].value,
      recovery: stats[item.itemInstanceId].stats[STAT_TYPE_RECOVERY].value,
      resilience: stats[item.itemInstanceId].stats[STAT_TYPE_RESILIENCE].value
    }))
}