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
    && (mobility % 10) >= 5
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
    && (mobility % 10) >= 5
    // must all be moderate levels of stats
    && [
      (recovery % 10) <= 2,
      (intellect % 10) <= 2,
      (discipline % 10) <= 2,
      (strength % 10) <= 2
    ].filter(n => n).length >= 3
    && resilience <= 20
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
    mobility <= 59
    && recovery >= 60
    // traction
    && (mobility % 10) >= 5
    && resilience <= 30
    // must all be moderate levels of stats
    && [
      (resilience % 10) <= 2,
      (recovery % 10) <= 2,
      (intellect % 10) <= 2,
      (discipline % 10) <= 2,
      (strength % 10) <= 2
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
    recovery >= 60
    // traction
    && (mobility % 10) >= 5
    && resilience >= 10
    && resilience <= 12
    // must all be moderate levels of stats
    && [
      (recovery % 10) <= 2,
      (intellect % 10) <= 2,
      (discipline % 10) <= 2,
      (strength % 10) <= 2
    ].filter(n => n).length >= 4
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
    resilience
  } = getStatBuild(items);

  return (
    resilience >= 10
    && resilience <= 12
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
    && (mobility % 10) >= 5
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
    && (mobility % 10) >= 5
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
    && (mobility % 10) >= 5
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
    && (mobility % 10) >= 5
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
  ['PvP - Warlock Minimum Gear', presetPvPMinWarlock]
];
