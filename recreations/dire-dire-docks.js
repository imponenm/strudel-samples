const mainMelody = [
    "[~@3 a3@2 b3@2 d4]",
    "[g4@3 d5@5], [~@3 b5@5]"
  ]
  
  const mainBass = [
    "[g2 d3] g3@3",
    "[g2 d3] g3@3"
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
    )
    .sound("piano")
    .sustain(0.5),
  
    stack(
      fullBass
    )
    .sound("piano")
    .sustain(0.5)
            
  ).cps(.55)