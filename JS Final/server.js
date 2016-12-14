var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static('public'));

//socket
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(PORT, function(){
	console.log('Socket Server Ready! ' + PORT);
});

io.on('connection', function(socket){
	console.log('new connection' + socket.id)

	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouse', data);
		console.log(data);
	}

});







// var express = require('express');

// var app = express();
// var server = app.listen(3000);

// app.use(express.static('public'));

// console.log("Socket Server Ready!");

// var socket = require('socket.io');
// var io = socket(server);

// io.sockets.on('connection', newConnection);

// function newConnection(socket){
// 	console.log('new connection' + socket.id);

// }