const mainMelody = [
  // Main 1
  "[~@3 a3@2 b3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",
  "[~@3 a3@2 b3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",

  // Main 2
  "[~@3 a3@2 b3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",
  "[~@3 a3@2 b3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",

  // Bridge 1
  "[~@3 a3@2 bb3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",
  "[~@3 a3@2 b3@2 d4]",
  "[g4@3 d5@5], [~@3 g5@5]",
]

const mainBass = [
  // Main 1
  "[g2 d3] g3@3",
  "[g2 d3] g3@3",
  "[f2 c3] f3@3",
  "[f2 c3] f3@3",

  // Main 2
  "[g2 d3] g3@3",
  "[g2 d3] g3@3",
  "[f2 c3] f3@3",
  "[f2 c3] f3@3",

  // Bridge 1
  "[eb2 bb2] eb3@3",
  "[eb2 bb2] eb3@3",
  "[f2 c3] f3@3",
  "[f2 c3] f3@2 c3"
]



const fullMelody = cat(
    ...mainMelody,
).note();

const fullBass = cat(
  ...mainBass,
).note();

stack(
  
  stack(
    fullMelody,
    fullMelody
  )
  .sound("piano")
  .sustain(0.5),

  stack(
    fullBass
    
  )
  .sound("piano")
  .sustain(0.5)
          
).cps(.55)