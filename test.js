// timeout_vs_immediate.js
// const fs = require('fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
// });

// function apiCall(arg, callback) {
//     if (typeof arg !== 'string')
//       return process.nextTick(callback,
//                               new TypeError('argument should be string'));
//   }

// apiCall("1", (err, res) => {console.log(err)});

const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
  console.log('Inside function MyEmmitor');
  // use nextTick to emit the event once a handler is assigned
  process.nextTick(() => {
    console.log('Use nextTick');
    this.emit('event');
  });
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});