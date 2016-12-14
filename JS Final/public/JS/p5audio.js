var canvas;
var wave;
var playing = false;
var playing01 = false;
var env; //envelope


////////////////////////////////////////////////////////
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup() { 
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position (0,0);
	canvas.style('z-index', '-1');
/////////////////////////////////////////////////////
	env = new p5.Env();
	env.setADSR(0.5, 0.25, 0.5, 0.1);
	env.setRange(0.8, 0);

	//env setup
	wave = new p5.Oscillator();
	wave.start();
	wave.freq(500);
	wave.amp(env);

	//button toggle setup
	wave01 = new p5.Oscillator();
	wave01.start();
	wave01.freq(200);
	wave01.amp(0);


	button00 = createButton('sine');
	button00.mousePressed(toggle00);

	button01 = createButton('square');
	button01.mousePressed(toggle01);
} 
////////////////////////////////////////////////////////
function draw() { 
	background(51);
}
////////////////////////////////////////////////////////
function toggle00(){
	//env.play();

	if(!playing){
		console.log("playing sine");
		wave.setType('sine');
		wave.amp(1, 1);//volume
		playing = true;
	} else {
		console.log("mute sine");
		wave.amp(0);
		playing = false;
	}
}

function toggle01(){
	if(!playing01){
		console.log("playing square");
		wave01.setType('square');
		wave01.amp(0.01, 1);//volume
		playing01 = true;
	} else {
		console.log("mute square");
		wave01.amp(0);
		playing01 = false;
	}
}

////////////////////////NOTES///////////////////////////
//previous mouse position
//apply this to a function like mousePressed etc.
//line(pmouseX, pmouseY, mouseX, mouseY);

//clear the canvas
//clear();

//oscillator can be sine, square, triangle, sawtooth

//setADSR(_,_,_,_);