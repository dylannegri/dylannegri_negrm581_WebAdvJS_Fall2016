/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	$('.items').mouseenter(function(){
		$(this).css('opacity',0.5);
	});
	$('.items').mouseleave(function(){
		$(this).css('opacity', 1);
	});
	$('.navs').mouseenter(function(){
		$(this).css({'color':'rgb(100,100,255)'},1000);
	});
	$(".navs").mouseleave(function(){
		$(this).css({'color': 'white'},50);
	});


	var init = function(){
		console.log('Initializing app.');
		
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);