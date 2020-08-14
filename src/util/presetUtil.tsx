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
    ].filter(n => n).length >= 4

    && total >= totalFloor
  );
}
