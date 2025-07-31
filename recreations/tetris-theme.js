// Define melody sections as arrays of strings
const introMelody = [
  "~ ~ ~ [e5 ~], ~ ~ ~ [b4 ~]",
  "e5 [b4 c5, g4 ~] d5 [c5 b4, a4 g4]",
  "a4 [a4 c5] e5 [d5 c5]",
  "b4 [b4 c5] d5 e5",
  "c5 a4 a4 ~",
  "[~ d5@2 f5 a5@2 g5 f5]",
  "[e5@3 c5 e5@2 d5 c5]",
  "b4 [b4 c5] d5 e5",
  "c5 a4 a4 ~"
];

const verseMelody = [
  "e5 [b4 c5] d5 [c5 b4]",
  "a4 [a4 c5] e5 [d5 c5]"
];

// Define bassline sections similarly
const introBass = [
  "~",
  "[e2 e3]*4",
  "[a1 a2]*4",
  "[g#1 g#2]*4",
  "[a1 a2]!3 [b2 c2]",
  "[d2 d3]*4",
  "[c2 c3]*4",
  "[b1 b2]*4",
  "[a1 a2]*4"
];

const bridgeMelody = introMelody.slice(1)
const bridgeBass = introBass.slice(1);

const chorusMelody = [
  "e4@2 c4@2",
  "d4@2 b3@2",
  "c4@2 a3@2",
  "g#3@2 b3@2",
  "e4@2 c4@2",
  "d4@2 b3@2",
  "c4 e4 a4 a4",
  "<b4, e4, g#3>"
];

const chorusBass = [
  "[a1 a2]*4",
  "[g#1 g#2]*4",
  "[a1 a2]*4",
  "[g#1 g#2]*4",
  "[a1 a2]*4",
  "[g#1 g#2]*4",
  "[a1 a2]*4",
  "[e1 e2]*4"
]

const drumLoop = [
  "[~ white ~ white ~ [white white] ~ white]",
  "[~ white ~ white ~ white white white]"
];

const fullDrums = cat(
  "~",
  ...Array(16).fill(drumLoop).flat(),  // repeat drumLoop 16 times
).sound().clip(0.5).cps(0.625);


// Combine full sequences
const fullMelody = cat(
  ...introMelody, 
  ...bridgeMelody, 
  ...chorusMelody,
  ...bridgeMelody
).note();

const fullBass = cat(
  ...introBass, 
  ...bridgeBass, 
  ...chorusBass,
  ...bridgeBass
).note();

// Final pattern: stacked melody + bass
stack(
  stack(
    fullMelody
  ).sound("pulse"),
  stack(
    fullBass
  ).sound("pulse").gain(0.8),
  stack(
    fullDrums
  ).sound("white").clip(0.5).gain(0.4)
).cps(0.625);
