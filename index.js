const config = require('./config.js');
const analyze = require('./analyze.js');
const request = require('request');
const path = require('path');

function start() {
	request(config.url, function(err, body) {
		console.log('start');
		if (!err && res) {
			console.log('start');
			analyze.findImg(body);
		}
		
	});
}

function downLoad(imgUrl, i) {
	let ext = imgUrl.sqlit('.').pop();
	request(imgUrl).pipe(fs.createWriteStream(path.ioin(config.imgDir,i + '.' + ext), {
		'encoding': 'utf8'
	}))
	console.log(i);
}