import {
  MOD_TYPE_CHARGE_HARVESTER,
  MOD_TYPE_DISCIPLINE, MOD_TYPE_EXTRA_RESERVES,
  MOD_TYPE_INTELLECT,
  MOD_TYPE_MOBILITY, MOD_TYPE_MOBILITY2,
  MOD_TYPE_POWERFUL_FRIENDS,
  MOD_TYPE_PRECISELY_CHARGED,
  MOD_TYPE_PROTECTIVE_LIGHT,
  MOD_TYPE_RADIANT_LIGHT,
  MOD_TYPE_RECOVERY, MOD_TYPE_RECOVERY2,
  MOD_TYPE_RESILIENCE, MOD_TYPE_RESILIENCE2,
  MOD_TYPE_STACK_ON_STACKS,
  MOD_TYPE_STRENGTH, MOD_TYPE_SURPRISE_ATTACK,
  MOD_TYPE_TRACTION, MOD_TYPE_TRACTION2,
  STAT_TYPE_DISCIPLINE,
  STAT_TYPE_INTELLECT,
  STAT_TYPE_MOBILITY,
  STAT_TYPE_RECOVERY,
  STAT_TYPE_RESILIENCE,
  STAT_TYPE_STRENGTH
} from '../constants';

export interface Item {

}

export const MOD_BASELINE_CONFIG = [
  [MOD_TYPE_MOBILITY, 'mobility', -10],
  [MOD_TYPE_MOBILITY2, 'mobility', -10],
  [MOD_TYPE_RECOVERY, 'recovery', -10],
  [MOD_TYPE_RECOVERY2, 'recovery', -10],
  [MOD_TYPE_RESILIENCE, 'resilience', -10],
  [MOD_TYPE_RESILIENCE2, 'resilience', -10],
  [MOD_TYPE_STRENGTH, 'strength', -10],
  [MOD_TYPE_INTELLECT, 'intellect', -10],
  [MOD_TYPE_DISCIPLINE, 'discipline', -10],
  [MOD_TYPE_TRACTION, 'mobility', -5],
  [MOD_TYPE_TRACTION2, 'mobility', -5],
  [MOD_TYPE_RADIANT_LIGHT, 'strength', -20],
  [MOD_TYPE_POWERFUL_FRIENDS, 'mobility', -20],
  [MOD_TYPE_STACK_ON_STACKS, 'recovery', 10],
  [MOD_TYPE_PRECISELY_CHARGED, 'discipline', 10],
  [MOD_TYPE_PROTECTIVE_LIGHT, 'strength', 10],
  [MOD_TYPE_EXTRA_RESERVES, 'intellect', 10],
  [MOD_TYPE_SURPRISE_ATTACK, 'intellect', 10],
  // @TODO it's dependent on the class :/
  // [MOD_TYPE_CHARGE_HARVESTER, '']
]

export function isModEquipped(hash : any, sockets : any) {
  return sockets.some((socket : any) => socket.isEnabled && socket.plugHash.toString() === hash.toString());
}

export function applyBaseLineStats(item : any, mods : any, instanceData : any) {
  const appliedMods = mods[item.itemInstanceId];

  // do nothing if there's no mods to work wit
  if (!appliedMods || appliedMods.sockets.length === 0) {
    return item;
  }

  MOD_BASELINE_CONFIG.forEach(([hash, prop, value]) => {
    if (isModEquipped(hash, appliedMods.sockets)) {
      item[prop] += value;
    }
  });

  // check for master worked items
  const extraItemData = instanceData[item.itemInstanceId];
  if (extraItemData && extraItemData.energy && extraItemData.energy.energyCapacity === 10) {
    [
      'mobility',
      'recovery',
      'resilience',
      'strength',
      'intellect',
      'discipline'
    ].forEach((stat) => {
      item[stat] -= 2;
    });
  }

  return item;
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

  const onCharacterInventories : any = Object.keys(profile.characterEquipment.data)
    .map(key => profile.characterEquipment.data[key].items)
    .reduce((o, i) => ([...o, ...i]), []);

  const characterInventories : any = Object.keys(profile.characterInventories.data)
    .map(key => profile.characterInventories.data[key].items)
    .reduce((o, i) => ([...o, ...i]), []);

  const stats = profile.itemComponents.stats.data;
  const instanceData = profile.itemComponents.instances.data;
  const modSlots = profile.itemComponents.sockets.data;

  const items = [
    ...vaultInventory,
    ...characterInventories,
    ...onCharacterInventories
  ];

  return items
    .filter(item => (
      item.itemInstanceId
      && contentMap[item.itemHash].equippingBlock
      && contentMap[item.itemHash].quality
      && stats[item.itemInstanceId]
      && stats[item.itemInstanceId].stats
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
    .map(item => applyBaseLineStats(item, modSlots, instanceData))
}
