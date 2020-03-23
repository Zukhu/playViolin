
window.onload = function() {

  let arrEString = {
    "E5": 659.26,
    "E5h1": 1318.52,
    "E5h2": 1977.78,
    "E5h3": 2571.11,
    "E5h4": 3856.67,
    "E5h5": 4628.01,
    "F#": 740,
    "F#h1": 1480, //*2
    "F#h2": 2220, //*1.5
    "F#h3": 2886, //*1.3
    "F#h4": 4329, //*1.5
    "F#h5": 5195, //*1.2
    "G#": 830.6,
    "G#h1": 1661.2,
    "G#h2": 2491.8,
    "G#h3": 3239.34,
    "G#h4": 4859.01,
    "G#h5": 5830.81,
    "A": 880,
    "Ah1": 1760, //*2
    "Ah2": 2640, //*1.5
    "Ah3": 3432, //*1.3
    "Ah4": 5148, //*1.5
    "Ah5": 6177.6, //*1.2
    "B": 987.8,
    "Bh1": 1975.6, //*2
    "Bh2": 2963.4, //*1.5
    "Bh3": 3852.42, //*1.3
    "Bh4": 5778.63, //*1.5
    "Bh5": 6934.36, //*1.2
    "C": 1047,
    "Ch1": 2094, //*2
    "Ch2": 3141, //*1.5
    "Ch3": 4083.3, //*1.3
    "Ch4": 6124.95, //*1.5
    "Ch5": 7349.94, //*1.2
    "D": 1175,
  };
  
  let arrAString = {
    "A4": 440,
    "A4h1": 880, //*2
    "A4h2": 1320, //*1.5
    "A4h3": 1716, //*1.3
    "A4h4": 2574, //*1.5
    "A4h5": 3088.8, //*1.2
    "B": 987.8,
    "Bh1": 1975.6, //*2
    "Bh2": 2963.4, //*1.5
    "Bh3": 3852.42, //*1.3
    "Bh4": 5778.63, //*1.5
    "Bh5": 6934.36, //*1.2
    "C#": 554.4,
    "C#h1": 1108.8,
    "C#h2": 1663.2,
    "C#h3": 2162.16,
    "C#h4": 3243.24,
    "C#h5": 3891.89,
    "D": 587.3,
    "Dh1": 1174.6,
    "Dh2": 1761.9,
    "Dh3": 2290.47,
    "Dh4": 3435.71,
    "Dh5": 4122.85,
    "E": 659.3,
  };
  
  let arrDString = {
    "D4": 293.66,
    "D4h1": 587.32, //*2
    "D4h2": 880.98, //*1.5
    "D4h3": 1145.27, //*1.3
    "D4h4": 1717.91, //*1.5
    "D4h5": 2061.49, //*1.2
    "E": 329.6,
    "Eh1": 659.2, //*2
    "Eh2": 988.8, //*1.5
    "Eh3": 1285.44, //*1.3
    "Eh4": 1928.16, //*1.5
    "Eh5": 2313.79, //*1.2
    "F#": 370,
    "F#h1": 740, //*2
    "F#h2": 1110, //*1.5
    "F#h3": 1443, //*1.3
    "F#h4": 2164.5, //*1.5
    "F#h5": 2597.4, //*1.2
    "G": 392,
    "Gh1": 784, //*2
    "Gh2": 1176, //*1.5
    "Gh3": 1528.8, //*1.3
    "Gh4": 2293.2, //*1.5
    "Gh5": 2751.84, //*1.2
    "A": 440,
    "Ah1": 880, //*2
    "Ah2": 1320, //*1.5
    "Ah3": 1716, //*1.3
    "Ah4": 2574, //*1.5
    "Ah5": 3088.8, //*1.2
  };
  
  let arrGString = {
    "G3": 196,
    "G3h1": 392, //*2
    "G3h2": 588, //*1.5
    "G3h3": 764.4, //*1.3
    "G3h4": 1146.6, //*1.5
    "G3h5": 1375.92, //*1.2
    "A": 220,
    "Ah1": 392, //*2
    "Ah2": 588, //*1.5
    "Ah3": 764.4, //*1.3
    "Ah4": 1146.6, //*1.5
    "Ah5": 1375.92, //*1.2
    "B": 246.9,
    "Bh1": 493.8, //*2
    "Bh2": 740.7, //*1.5
    "Bh3": 962.91, //*1.3
    "Bh4": 1444.36, //*1.5
    "Bh5": 1733.24, //*1.2
    "C": 261.6,
    "Ch1": 523.2, //*2
    "Ch2": 784.8, //*1.5
    "Ch3": 1020.24, //*1.3
    "Ch4": 1530.36, //*1.5
    "Ch5": 1836.43, //*1.2
    "D": 293.7,
    "Ah1": 587.4, //*2
    "Ah2": 881.11, //*1.5
    "Ah3": 1145.43, //*1.3
    "Ah4": 1718.15, //*1.5
    "Ah5": 2061.77, //*1.2
  };
  
  
  var keyState = {};    
  window.addEventListener('keydown',function(e){
      keyState[e.keyCode || e.which] = true;
  },true);    
  window.addEventListener('keyup',function(e){
      keyState[e.keyCode || e.which] = false;
  },true);
  
  
  function gameLoop() {
      if (keyState[190]) {
            document.getElementById("ecord-fsharp").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrEString["F#"], 1);
            playSound(arrEString["F#h1"], 0.25);
            playSound(arrEString["F#h2"], 0.25);
            playSound(arrEString["F#h3"], 0.25);
            playSound(arrEString["F#h4"], 0.5);
            playSound(arrEString["F#h5"], 0.25);    
      } else if (keyState[189]) {
            document.getElementById("e5-button").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrEString["E5"], 1);
            playSound(arrEString["E5h1"], 0.25);
            playSound(arrEString["E5h2"], 0.25);
            playSound(arrEString["E5h3"], 0.25);
            playSound(arrEString["E5h4"], 0.5);
            playSound(arrEString["E5h5"], 0.25);
      } else if (keyState[188]) {
            document.getElementById("ecord-gsharp").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrEString["G#"], 1);
            playSound(arrEString["G#h1"], 0.25);
            playSound(arrEString["G#h2"], 0.25);
            playSound(arrEString["G#h3"], 0.25);
            playSound(arrEString["G#h4"], 0.5);
            playSound(arrEString["G#h5"], 0.25);
      } else if  (keyState[77]) {
            document.getElementById("ecord-a").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrEString["A"], 1);
            playSound(arrEString["Ah1"], 0.25);
            playSound(arrEString["Ah2"], 0.25);
            playSound(arrEString["Ah3"], 0.25);
            playSound(arrEString["Ah4"], 0.5);
            playSound(arrEString["Ah5"], 0.25);
      } else if  (keyState[90]) {
            document.getElementById("a4-button").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrAString["A4"], 1);
            playSound(arrAString["A4h1"], 0.25);
            playSound(arrAString["A4h2"], 0.25);
            playSound(arrAString["A4h3"], 0.25);
            playSound(arrAString["A4h4"], 0.5);
            playSound(arrAString["A4h5"], 0.25);
      } else if  (keyState[88]) {
            document.getElementById("acord-b").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrAString["B"], 1);
            playSound(arrAString["Bh1"], 0.25);
            playSound(arrAString["Bh2"], 0.25);
            playSound(arrAString["Bh3"], 0.25);
            playSound(arrAString["Bh4"], 0.5);
            playSound(arrAString["Bh5"], 0.25);
      } else if  (keyState[67]) {
            document.getElementById("acord-csharp").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrAString["C#"], 1);
            playSound(arrAString["C#h1"], 0.25);
            playSound(arrAString["C#h2"], 0.25);
            playSound(arrAString["C#h3"], 0.25);
            playSound(arrAString["C#h4"], 0.5);
            playSound(arrAString["C#h5"], 0.25);
      } else if  (keyState[86]) {
            document.getElementById("acord-d").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrAString["D"], 1);
            playSound(arrAString["Dh1"], 0.25);
            playSound(arrAString["Dh2"], 0.25);
            playSound(arrAString["Dh3"], 0.25);
            playSound(arrAString["Dh4"], 0.5);
            playSound(arrAString["Dh5"], 0.25);
      } else if  (keyState[192]) {
            document.getElementById("d4-button").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrDString["D4"], 1);
            playSound(arrDString["D4h1"], 0.25);
            playSound(arrDString["D4h2"], 0.25);
            playSound(arrDString["D4h3"], 0.25);
            playSound(arrDString["D4h4"], 0.5);
            playSound(arrDString["D4h5"], 0.25);
      } else if  (keyState[76]) {
            document.getElementById("dcord-e").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrDString["E"], 1);
            playSound(arrDString["Eh1"], 0.25);
            playSound(arrDString["Eh2"], 0.25);
            playSound(arrDString["Eh3"], 0.25);
            playSound(arrDString["Eh4"], 0.5);
            playSound(arrDString["Eh5"], 0.25);
      } else if  (keyState[75]) {
            document.getElementById("dcord-fsharp").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrDString["F#"], 1);
            playSound(arrDString["F#h1"], 0.25);
            playSound(arrDString["F#h2"], 0.25);
            playSound(arrDString["F#h3"], 0.25);
            playSound(arrDString["F#h4"], 0.5);
            playSound(arrDString["F#h5"], 0.25);
      } else if  (keyState[74]) {
            document.getElementById("dcord-g").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrDString["G"], 1);
            playSound(arrDString["Gh1"], 0.25);
            playSound(arrDString["Gh2"], 0.25);
            playSound(arrDString["Gh3"], 0.25);
            playSound(arrDString["Gh4"], 0.5);
            playSound(arrDString["Gh5"], 0.25);
      } else if  (keyState[65]) {
            document.getElementById("g3-button").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrGString["G3"], 1);
            playSound(arrGString["G3h1"], 0.25);
            playSound(arrGString["G3h2"], 0.25);
            playSound(arrGString["G3h3"], 0.25);
            playSound(arrGString["G3h4"], 0.5);
            playSound(arrGString["G3h5"], 0.25);
      } else if  (keyState[83]) {
            document.getElementById("gcord-a").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrGString["A"], 1);
            playSound(arrGString["Ah1"], 0.25);
            playSound(arrGString["Ah2"], 0.25);
            playSound(arrGString["Ah3"], 0.25);
            playSound(arrGString["Ah4"], 0.5);
            playSound(arrGString["Ah5"], 0.25);
      } else if  (keyState[68]) {
            document.getElementById("gcord-b").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrGString["B"], 1);
            playSound(arrGString["Bh1"], 0.25);
            playSound(arrGString["Bh2"], 0.25);
            playSound(arrGString["Bh3"], 0.25);
            playSound(arrGString["Bh4"], 0.5);
            playSound(arrGString["Bh5"], 0.25);
      } else if  (keyState[70]) {
            document.getElementById("gcord-c").style.backgroundColor ="rgb(117, 35, 140)";
            playSound(arrGString["C"], 1);
            playSound(arrGString["Ch1"], 0.25);
            playSound(arrGString["Ch2"], 0.25);
            playSound(arrGString["Ch3"], 0.25);
            playSound(arrGString["Ch4"], 0.5);
            playSound(arrGString["Ch5"], 0.25);
      } else {
            document.querySelectorAll(".note").forEach(item => {
                  item.style.backgroundColor = "lightcoral";
      });
      }     
      
  
      setTimeout(gameLoop, 10);
      
      
      }    
      gameLoop();
  
  

  var context = new AudioContext();
  var o, g;
  
      function playSound(fr, amplit) {
          // Create OscillatorNode
          o = context.createOscillator(); // Create sound source
          o.type = "sine"; // Sine wave
          o.frequency.value = fr; // Frequency in hertz (passed from input button)
          
          // Create GainNode	
          g = context.createGain(); // Create gain node
          g.gain.value = amplit; // Set gain to full volume

        
          // Connect the Nodes
          o.connect(g); // Connect oscillator to gain
          g.connect(context.destination); // Connect gain to output
        
        o.start(context.currentTime); // Play oscillator instantly
        o.stop(context.currentTime + 0.3);
        
      }
  
  
  function stopSound() {
    o.stop(context.currentTime + 0.5); // Stop oscillator after 0 seconds
      o.disconnect(); // Disconnect oscillator so it can be picked up by browser’s garbage collector
  }
     
}





