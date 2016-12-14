function fourthWaveForm(data){

  var waveform = fft.waveform();  // analyze the waveform

  push();
  beginShape();
  stroke(0,0,255); 
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  pop();

  // change oscillator frequency based on mouseX
  console.log(data.mouseX);
  var freq = map(data.mouseX, 0, width, data.minFreq, data.maxFreq);
  osc.freq(freq);

  var amp = map(data.mouseY, 25, height, 1, .01);
  osc.amp(amp);
}

function fifthWaveForm(data){

  var waveform01 = fft01.waveform();

  push();
  beginShape();
  stroke(0,0,255);
  strokeWeight(5);
  for(var j = 0; j < waveform01.length; j++){
    var x01 = map(j, 0, waveform01.length, 0, width);
    var y01 = map(waveform01[j], -1, 1, height, 0);
    vertex(x01, y01);
  }
  endShape();
  pop();

  var freq01 = map (data.mouseX, 0, width, data.minFreq01, data.maxFreq01);
  osc01.freq(freq01);

  var amp01 = map (data.mouseY, 0, height, 1, .01);
  osc01.amp(amp01);
}

function sixthWaveForm(data){

  var waveform02 = fft02.waveform();

  push();
  beginShape();
  stroke(0,0,255);
  strokeWeight(5);
  for(var f = 0; f < waveform02.length; f++){
    var x02 = map(f, 0, waveform02.length, 0, width);
    var y02 = map(waveform02[f], -1, 1, height, 0);
    vertex(x02, y02);
  }
  endShape();
  pop();

  var freq02 = map (data.mouseX, 0, width, data.minFreq02, data.maxFreq02);
  osc02.freq(freq02);

  var amp02 = map (data.mouseY, 0, height, 1, .01);
  osc02.amp(amp02);
}