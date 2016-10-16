//jquery bitches!
$(document).ready(function(){
	console.log('Ready!');
	$(function(){
		$.getJSON('results.json', function(data){
			console.log("getting json");
			var template = $('#template').html();
			var html = Mustache.render(template, data);
			$('#results').html(html);
		});
	});
}); //ready!

