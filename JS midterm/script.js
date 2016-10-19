// var app = app || {};

// app.main = (function() {
///////////////////////////
	
	$(function(){
		$.getJSON('results.json', function(data){
			console.log(data);
			var template = $('#template').html();
			var input = Mustache.render(template, data);
			$('#results').html(input);
			console.log("attempting to apply results");

			$('#results').cycle({
				fx: 'fade',
				pause: 1,
				next: '#next_btn',
				prev: '#prev_btn',
				speed: 500,
				timeout: 10000
			}); //container
		});//get JSON
		// $('#container').mouseenter(function(){
		// 	$(this).css("overflow","auto");
		// });
		// $('#container').mouseleave(function(){
		// 	$(this).css("overflow","hidden");
		// });
	}); //start

///////////////////////////
// 	var init = function(){
// 		console.log('Initializing app.');
// 	};

// 	return {
// 		init: init
// 	};
// })();



// $.getJSON('results.json', function(data){
// 	console.log(data);
// 	var output = '<ul class="searchresults">';
// 	$.each(data, function(key, val){
// 		console.log(key);
// 		console.log(val);
// 		console.log(val[0].name);
// 		output += '<li>';
// 		output += '<h2>' + val.name + '</h2>';
// 		output += '</li>';
// 	});
// 	output += '</ul>';
// 	$('#update').html(output);
// });


