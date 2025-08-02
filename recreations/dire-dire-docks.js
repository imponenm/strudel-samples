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
  
  const verse1Melody = [
    "[~ d4 g4 a4 b4 c5 b4 a4]",
    "g4 d4 c4 g4",
    "d4@4",
    "[~@5 c4@2 c4]",
    "[b3 d4 g4@3 a3 [b3, g3]]",
    "[[b3, g3@3] d4@2 [g4@3, b3@3]]"
  ]
  
  const verse1Bass = [
    "[g2 d3] g3@2 [g3 d3]",
    "[f2 c3] f3@3",
    "[eb2 bb2 eb3 g@3 eb3 g3]",
    "[f2 c3] f3@2 [c3 f3]",
    "[g2 d3] g3@3",
    "[g2 d3] g3@3"
  ]
  
  
  const fullMelody = cat(
    // ...mainMelody,
    ...verse1Melody,
    ...verse1Melody
  ).note();
  
  const fullBass = cat(
    // ...mainBass,
    ...verse1Bass,
    ...verse1Bass
  ).note();
  
  stack(
    
    stack(
      fullMelody,
    )
    .sound("piano")
    .sustain(0.5),
  
    stack(
      fullBass
    )
    .sound("piano")
    .sustain(0.5)
            
  ).cps(.55)