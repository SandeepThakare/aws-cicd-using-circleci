// timeout_vs_immediate.js
const fs = require('fs');

// fs.readFile(__filename, () => {
//     console.log("first");
//     setImmediate(function() {
//         console.log("second");
//     });
//     console.log("third");
// });

// const data = fs.readFileSync('.eslintrc.json', (err, data) => {
//     setTimeout(() => {
//         console.log(data);
//     }, 10000);
// }); // blocks here until file is read
// console.log(data);

// function apiCall(arg, callback) {
//     if (typeof arg !== 'string')
//       return process.nextTick(callback,
//                               new TypeError('argument should be string'));
//   }

// apiCall("1", (err, res) => {console.log(err)});

// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);
//   console.log('Inside function MyEmmitor');
//   // use nextTick to emit the event once a handler is assigned
//   process.nextTick(() => {
//     console.log('Use nextTick');
//     this.emit('event');
//   });
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

{
    console.time("loop");
    for (var i = 0; i < 10000000; i += 1){
        // Do nothing
        debugger
    }
    console.timeEnd("loop");
    console.log('Add',  10+20+30)
}