/* Your code starts here */

// var api = "http://api.giphy.com/v1/gifs/search";
// var apiKey = "api_key=dc6zaTOxFJmzC";
// var query = "&q=" + $('#giphy').val;


$(document).ready()
	console.log("hello world!");

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var attachEvents = function(){
		console.log('attachEvents.');

		$('#searchGiphy').on('click',function(){
			console.log($('#giphy').val());
			loadData($('#giphy').val());
		})
		$('#giphy').keypress(function(e){
			if(e.keyCode == 13){
				loadData($('#giphy').val());
			}
		})
	};

	var loadData = function(query){
		console.log('searching for ' + query + '...');

		var myURL = 'http:api.giphy.com/v1/gifs/search?q='+query+"&api_key=dc6zaTOxFJmzC";

		$.ajax ({
			url: myURL,
			data: {
				limit: 40
			},

			 success: function(response){
				 console.log(response);
				 var results = response.data;
				 appendData(results);
				 	
			}
		});
	};

	var appendData = function(data){
		console.log('Appending data.');

		$('#view').empty();

		for(var i = 0; i < data.length; i++){
			$('#view').append('<img src="' + data[i].images.fixed_height.url + '" class="gallery-item" />');
		}
	}


	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);