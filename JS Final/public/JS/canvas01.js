var sketch01 = function(can1){
	can1.setup = function() { 
	
	} 

	can1.draw = function() { 
  		var canvas01 = can1.createCanvas(can1.windowWidth/4, 400);
  			canvas01.parent('title01');
  		can1.background(88,0,0);
  		can1.fill(255,0,0);
  		can1.noStroke();
  		for(var i = 0; i<100; i++){
  			can1.ellipse(can1.width/2+Math.sin(can1.mouseX/100.0)*(can1.mouseX/5.0), can1.height/2+Math.cos(can1.mouseX/100.0)*(can1.mouseX/5.0), 100, 100);
  		}
	}
}

var sketch02 = function(can2){
	can2.setup = function() { 
		//var parent02 = can2.select('#title02')
	} 

	can2.draw = function() { 
  		var canvas02 = can2.createCanvas(can2.windowWidth/4, 400);
  			canvas02.parent('title02');
  		can2.background(0,0,88);
  		can2.fill(255,0,0);
  		can2.noStroke();
  		for(var i = 0; i<100; i++){
  			can2.ellipse(can2.width/2+Math.sin(can2.mouseX/100.0)*(can2.mouseX/5.0), can2.height/2+Math.cos(can2.mouseX/100.0)*(can2.mouseX/5.0), 100, 100);
  		}
	}
}

new p5(sketch01, 'title01');
new p5(sketch02, 'title02');