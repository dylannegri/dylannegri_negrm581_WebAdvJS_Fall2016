//jquery bitches!
$(document).ready(function(){
	console.log('Ready!');
	$(function(){
		$.getJSON('results.json', function(data){
			console.log("getting json");
			var template = $('#restaurantsTPL').html();
			var html = Mustache.to_html(template, data);
			$('#results').html(html);
		});
	});
}); //ready!

