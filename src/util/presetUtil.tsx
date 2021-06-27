export function getStatBuild(items : any[]) {
  const combo = items;
  const mobility = combo.reduce((o, a) => o + a.mobility, 0);
  const resilience = combo.reduce((o, a) => o + a.resilience, 0);
  const recovery = combo.reduce((o, a) => o + a.recovery, 0);
  const discipline = combo.reduce((o, a) => o + a.discipline, 0);
  const intellect = combo.reduce((o, a) => o + a.intellect, 0);
  const strength = combo.reduce((o, a) => o + a.strength, 0);
  const total = mobility + resilience + recovery + discipline + intellect + strength;

  return {
    mobility,
    resilience,
    recovery,
    discipline,
    intellect,
    strength,
    total
  };
}

export function isViableStat(value : number) {
  return (value % 10 >= 5 && value % 10 <= 7) || value % 10 <= 3
}

export function presetPvPStandard(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    total
  } = getStatBuild(items);

  return (
    mobility <= 59
    && recovery >= 60
    // traction
    && (mobility % 10) <= 4
    // must all be moderate levels of stats
    && [
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (discipline % 10) <= 4,
      (strength % 10) <= 4
    ].filter(n => n).length >= 4

    && total >= totalFloor
  );
}

export function presetPvPStandardResilience(items : any[], totalFloor = 220) {
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
    mobility <= 59
    && recovery >= 60
    // traction
    && (mobility % 10) <= 4
    // must all be moderate levels of stats
    && [
      (recovery % 10) <= 2,
      (intellect % 10) <= 2,
      (discipline % 10) <= 2,
      (strength % 10) <= 2
    ].filter(n => n).length >= 3
    && resilience <= 24
    && total >= totalFloor
  );
}

export function presetPvPPerfect(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    recovery >= 60
    && resilience <= 26
    // must all be moderate levels of stats
    && [
      isViableStat(mobility),
      (resilience % 10) <= 4,
      isViableStat(recovery),
      isViableStat(intellect),
      isViableStat(discipline),
      isViableStat(strength)
    ].filter(n => n).length >= 5
  );
}

export function presetPvPPerfectLowResilience(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    recovery >= 80
    && mobility >= 40
    && resilience >= 10
    && resilience <= 16
    // must all be moderate levels of stats
    && [
      isViableStat(mobility),
      isViableStat(recovery),
      isViableStat(discipline),
      isViableStat(strength),
      (intellect % 10) <= 4,
    ].filter(n => n).length >= 5
  );
}

export function presetPvEStandard(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    total
  } = getStatBuild(items);

  return (
    (recovery >= 60)
    && (discipline >= 50)
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (discipline % 10) <= 4,
      (strength % 10) <= 4
    ].filter(n => n).length >= 5

    && total >= totalFloor
  );
}

export function presetPvEPerfect(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    (recovery >= 60)
    && (discipline >= 50)
    && [
      (mobility % 10) <= 2,
      (recovery % 10) <= 2,
      (intellect % 10) <= 2,
      (discipline % 10) <= 2,
      (strength % 10) <= 2,
      (resilience % 10) <= 2
    ].filter(n => n).length >= 6
  );
}


export function presetPvPLowResilience(items : any[], totalFloor = 220) {
  const {
    resilience
  } = getStatBuild(items);

  return (
    resilience < 20
  );
}

export function presetPvPSuperLowResilience(items : any[], totalFloor = 220) {
  const {
    resilience,
    mobility,
    recovery
  } = getStatBuild(items);

  return (
    (mobility + recovery) >= 125
  );
}

export function presetPvPMinGear(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery
  } = getStatBuild(items);

  return (
    mobility >= 30
    && recovery >= 40
  );
}

export function presetPvPLowGear(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    mobility <= 59
    // traction
    && (mobility % 10) <= 4
    && resilience <= 30
    // must all be moderate levels of stats
    && [
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (discipline % 10) <= 4,
      (strength % 10) <= 4
    ].filter(n => n).length >= 4
  );
}

export function presetPvPUnchi1(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    mobility <= 59
    && ((mobility + recovery)) >= ((59 + 100) - 50)
    // traction
    && (mobility % 10) <= 4
    && resilience >= 10
    && resilience <= 12
    && (recovery % 10) <= 4
  );
}

export function presetPvPUnchiWarlock(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    mobility <= 19
    && ((mobility + recovery)) >= ((19 + 100) - 50)
    // traction
    && (mobility % 10) <= 4
    && resilience >= 10
    && resilience <= 22
    && (recovery % 10) <= 4
    && (intellect % 10) <= 4
    && intellect >= 60
  );
}

export function presetPvPUnchiTitan(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    intellect,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    (resilience + recovery) >= 100
  );
}

export function presetPvPMinWarlock(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    // discipline,
    // intellect,
    // strength,
    // resilience
  } = getStatBuild(items);

  return (
    mobility <= 39
    // traction
    && (mobility % 10) <= 4
    && recovery >= 50
    // && strength >= 50
    // && discipline >= 50
    // && [
    //   (recovery % 10) <= 4,
    //   (discipline % 10) <= 4,
    //   (strength % 10) <= 4
    // ].filter(n => n).length >= 1
  );
}

export function presetPvPWarlock(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    discipline,
    strength,
    resilience
  } = getStatBuild(items);

  return (
    mobility <= 39
    && (mobility % 10) <= 4
    && recovery >= 50
    && resilience <= 24
    && [
      (recovery % 10) <= 4,
      (discipline % 10) <= 4,
      (strength % 10) <= 4
    ].filter(n => n).length >= 2
  );
}

export function presetPvEAbilitySpamHunter(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience
  } = getStatBuild(items);

  return (
    mobility >= 50
    && recovery >= 50
    && resilience <= 30
  );
}

export function presetPvEAbilitySpamWarlock(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience <= 30
  );
}

export function presetPvEAbilitySpamTitan(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience >= 50
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 3
  );
}

export function presetPvEAbilitySpamHunterStandard(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility >= 50
    && recovery >= 50
    && resilience <= 30
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 3
  );
}

export function presetPvEAbilitySpamWarlockStandard(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience <= 30
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 3
  );
}

export function presetPvEAbilitySpamTitanStandard(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience >= 50
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 3
  );
}

export function presetPvEAbilitySpamHunterStandardLittleWaste(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    intellect
  } = getStatBuild(items);

  return (
    mobility >= 50
    && recovery >= 50
    && resilience <= 30
    && [
      isViableStat(mobility),
      isViableStat(recovery),
      isViableStat(intellect),
      isViableStat(resilience)
    ].filter(n => n).length >= 4
  );
}

export function presetPvEAbilitySpamWarlockStandardLittleWaste(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience <= 30
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 5
  );
}

export function presetPvEAbilitySpamTitanStandardLittleWaste(items : any[], totalFloor = 220) {
  const {
    mobility,
    recovery,
    resilience,
    discipline,
    intellect
  } = getStatBuild(items);

  return (
    mobility <= 30
    && recovery >= 50
    && resilience >= 50
    && [
      (mobility % 10) <= 4,
      (recovery % 10) <= 4,
      (intellect % 10) <= 4,
      (resilience % 10) <= 4,
      (discipline % 10) <= 4
    ].filter(n => n).length >= 5
  );
}

export const presetList = [
  ['No Optimization', () => true],
  ['PvP - Standard', presetPvPStandard],
  ['PvP - Standard (Low Resilience)', presetPvPStandardResilience],
  ['PvP - Perfect', presetPvPPerfect],
  ['PvE - Standard', presetPvEStandard],
  ['PvE - Perfect', presetPvEPerfect],
  ['PvP - Top Stats (Low Resilience)', presetPvPLowResilience],
  ['PvP - Low Gear (Low Resilience)', presetPvPLowGear],
  ['PvP - Top Stats (Super Low Resilience)', presetPvPSuperLowResilience],
  ['PvP - Minimum Gear', presetPvPMinGear],
  ['PvP - Perfect (Low Resilience)', presetPvPPerfectLowResilience],
  ['PvP - Unchi Hunter', presetPvPUnchi1],
  ['PvP - Unchi Warlock',presetPvPUnchiWarlock ],
  ['PvP - Unchi Titan 6',presetPvPUnchiTitan],
  ['PvP - Warlock Trash Gear', presetPvPMinWarlock],
  ['PvP - Warlock Minimum Gear', presetPvPWarlock],
  ['PvE - Hunter - Minimum - Ability Spam', presetPvEAbilitySpamHunter],
  ['PvE - Hunter - Average - Ability Spam', presetPvEAbilitySpamHunterStandard],
  ['PvE - Hunter - Above Average - Ability Spam', presetPvEAbilitySpamHunterStandardLittleWaste],
  ['PvE - Warlock - Minimum - Ability Spam', presetPvEAbilitySpamWarlock],
  ['PvE - Warlock - Average - Ability Spam', presetPvEAbilitySpamWarlockStandard],
  ['PvE - Warlock - Above Average - Ability Spam', presetPvEAbilitySpamWarlockStandardLittleWaste],
  ['PvE - Titan - Minimum - Ability Spam', presetPvEAbilitySpamTitan],
  ['PvE - Titan - Average - Ability Spam', presetPvEAbilitySpamTitanStandard],
  ['PvE - Titan - Above Average - Ability Spam', presetPvEAbilitySpamTitanStandardLittleWaste],
];
