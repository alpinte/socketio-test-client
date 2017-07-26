var socket = require('socket.io-client')('http://burstrenegade.zone:2086/');

socket.on('connect', function(){ console.log('connected'); });


socket.on('log', function(data){ console.log(data) });
socket.on('event', function(data){ console.log("event: " + data) });
socket.on('sentList', function(data){ console.log("sendList: " + data) });
socket.on('shareList', function(data){ console.log("shareList: " + data) });
socket.on('pending', function(data){ console.log("pending: " + data) });

socket.on('miningInfo', function(data){ console.log("miningInfo: " + data) });
socket.on('roundShares', function(data){ console.log("roundShares: " + data) });
socket.on('blockHistory', function(data){ console.log("blockHistory: " + data) });
socket.on('balance', function(data){ console.log("balance: " + data) });
socket.on('submitNonce', function(data){ console.log("submitNonce: " + data) });


socket.on('disconnect', function(){});
