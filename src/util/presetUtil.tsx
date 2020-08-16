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
    resilience <= 10
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
