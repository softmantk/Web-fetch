var express = require('express');
var app = express();
var colors = require('colors')
var request = require('request');
var md5 = require('md5')

setInterval(req, 500)
var prev=1;
var count = 0;
function req() {

	request('https://data.ny.gov/resource/h6w8-42p9.json',{json: true}, function(err, res, body) {
		if
			(err) console.log( err )
		if(prev ===1) {

			console.log("For the first time!");
			prev = md5(body);

		} else if(prev !== md5(body)) {
			var change = md5(body);
			console.log(change);
			var time = new Date();
			console.log("Change Detected At: ", new Date());
			console.log(time.getHours()+" :"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds())
		}else {
			process.stdout.clearLine();  // clear current text
  			process.stdout.cursorTo(0);  // move cursor to beginning of line
  			var time = new Date();
  			process.stdout.write("Req Count: " + (count++)   +"  at: "+ time);

		}

	});
}

