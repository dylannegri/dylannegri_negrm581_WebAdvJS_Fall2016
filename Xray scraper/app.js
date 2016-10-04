var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
x('http://www.billboard.com/charts/hot-100', '.container', [{
	topSongs: x('.chart-row__primary', [{
		title: '.chart-row__container .chart-row__title .chart-row__song',
		artist: '.chart-row__container .chart-row__title a@href',
		// year: '.lister-item-year',
		currentRank: '.chart-row__rank .chart-row__current-week',
		lastWeekRank: '.chart-row__last-week',
		poster: '.chart-row__image@style',
		poster2: '.chart-row__image@data-imagesrc',
		// rating: '.ratings-imdb-rating strong',
		// thumbnail: '.lister-item-image img@src',
		// genre: ['.genre'],
		// people: x('.lister-item-content p a', [{
		// 	name: '',
		// 	link: '@href'
		// }]),
		// poster: x('.lister-item-header a@href', 'head meta[property="og:image"]@content')
	}])
}])
	// .paginate('a.lister-page-next.next-page@href')
	// .limit(20)
    .write('results.json');