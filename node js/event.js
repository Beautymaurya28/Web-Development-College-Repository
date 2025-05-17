const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please turn off the motar');
  setTimeout(()=>{
    console.log('please turn off the motar! its a genter reminder');
  },3000)

});
// myEmitter.emit('event');
console.log("the script is running")
myEmitter.emit('waterFull');
console.log("the script is still running")


