//git bash (terminal) commands for x-ray;
//cd location/folder
//npm init
//npm install x-ray --save
//fill out perameters in app.js
//run node app.js (assuming that's the file name)
//check results.json

var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on

x('https://www.yelp.com/list/the-worst-restaurants-in-the-u-s-new-york','.column', [{
	restaurants: x('.ylist > li',[{
		name:'.indexed-biz-name a span',
		style:'.category-str-list a',
		address:'.addr-full',
		reviewPage:'a@href',
		image:'img.photo-box-img@src',
		rating:'img.offscreen@src',
		review:'p'
		
		}])
	}])

	.paginate('a.next@href')
	// .limit(29)
    .write('results.json');
