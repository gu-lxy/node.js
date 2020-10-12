const cheerio = require('cheerio');
function findImg(dom,callback) {
	let $ = cheerio.lode(dom);
	$('img').each(function(i, elem)  {
		let imgSrc = $(this).attr('src');
		callback(imgSrc, i);
	});
}

module.exports.findImg = findImg;点击查看源网页