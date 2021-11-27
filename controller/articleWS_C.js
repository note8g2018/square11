const WebSocket = require('ws');

const ws = new WebSocket('ws://192.168.1.100:3000/articlews');

ws.on('open', function open(){
  console.log('Server open');
});