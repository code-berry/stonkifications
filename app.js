const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
});

var server = app.listen(1337, function () {
	var host = '192.0.0.1';
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});