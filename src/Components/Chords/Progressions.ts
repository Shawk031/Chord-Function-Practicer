export const DiatonicChordFunctions = [
  "I",
  "ii",
  "iii",
  "IV",
  "V",
  "vi",
  "vii",
];

export const NonDiatonicChordFunctions = [
  "II",
  "III",
  "iv",
  "v",
  "V+",
  "VI",
  "VII",
];

export function getRandomProgressionElement() {
  return randomDiatonicChordFunction();
}

function randomDiatonicChordFunction() {
  let array = DiatonicChordFunctions;
  return array[Math.floor(Math.random() * array.length)];
}
