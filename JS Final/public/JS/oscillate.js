var socket;

//wave 1
var osc, fft;
var playing = false;
var vol = 0;
var minFreq = 0;
var maxFreq = 0;

//wave 2
var osc01, fft01;
var playing01 = false;
var vol01 = 0;
var minFreq01= 0;
var maxFreq01 = 0;

//wave 3
var osc02, fft02;
var playing02 = false;
var vol02 = 0;
var minFreq02= 0;
var maxFreq02 = 0;

function windowResized(){
  resizeCanvas(windowWidth, 256);

}

function setup() {
  canvas = createCanvas(windowWidth, 256);
  canvas.position (0,height / 3);
  canvas.style('z-index', '-1');
  background(240);
  
  socket = io.connect();
  socket.on('mouse', newOsc);

  //wave 1
  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(vol);
  fft = new p5.FFT();
  osc.start();

  //wave 2
  osc01 = new p5.TriOsc();
  osc01.amp(vol01);
  fft01 = new p5.FFT();
  osc01.start();

  //wave 3
  osc02 = new p5.SawOsc();
  osc02.amp(vol02);
  fft02 = new p5.FFT();
  osc02.start();

  //buttons
  button = createButton("SIN");
  button.mousePressed(toggle);

  button01 = createButton("TRI");
  button01.mousePressed(toggle01);

  button02 = createButton("SAW");
  button02.mousePressed(toggle02);
}

function newOsc(data){
  // console.log(data);
  fourthWaveForm(data);
  fifthWaveForm(data);
  sixthWaveForm(data);
}

function mouseDragged(){
  var data = {
      mouseX: mouseX,
      mouseY: mouseY,
      playing: playing,
      vol: vol,
      minFreq: minFreq,
      maxFreq: maxFreq,
      playing01: playing01,
      vol01: vol01,
      minFreq01: minFreq01,
      maxFreq01: maxFreq01,
      playing02: playing02,
      vol02: vol02,
      minFreq02: minFreq02,
      maxFreq02: maxFreq02
    }
    socket.emit('mouse', data);
// console.log(data);

  firstWaveForm();
  secondWaveForm();
  thirdWaveForm();
}

// function draw() {

// }

function toggle(){
  if(!playing){
    console.log("playing sine");
    vol = .5;
    minFreq = 40;
    maxFreq = 800;
    playing = true;
  } else {
    console.log("stoping sine");
    vol = 0;
    minFreq = 0;
    maxFreq = 0;
    playing = false;
  }
}

function toggle01(){
  if(!playing01){
    console.log("playing triangle");
    vol01 = .5;
    minFreq01 = 40;
    maxFreq01= 800;
    playing01 = true;
  } else {
    console.log("stoping triangle");
    vol01 = 0;
    minFreq01 = 0;
    maxFreq01 = 0;
    playing01 = false;
  }
}

function toggle02(){
  if(!playing02){
    console.log("playing sawtooth");
    vol02 = .5;
    minFreq02 = 40;
    maxFreq02= 800;
    playing02 = true;
  } else {
    console.log("stoping sawtooth");
    vol02 = 0;
    minFreq02 = 0;
    maxFreq02 = 0;
    playing02 = false;
  }
}