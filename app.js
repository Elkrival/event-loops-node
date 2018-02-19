'use strict'
/* ## old server code
const http = require('http')

http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n')
}).listen(8124);
console.log('Server running at 8124');
*/

/*
 const http = require('http')
 //assigned create server to a variable
 const server = http.createServer()
 console.log(server);
 //server variable is used to capture a request event
 server.on('request', (req, res) =>{
   console.log('request event');
   res.writeHead(200, {'Content-Type': 'text/plain'})
   res.end('Hello World\n')
 })
 //server variable is used to capture a connection event
 server.on('connection', () =>{
   console.log('connection event');
 })

server.listen(8124, () =>{
  console.log('listening event');
});

console.log('Server running on port 8124');
*/

//Asynchronous Callback functionality

// var fib = function (n) {
// if (n < 2) return n;
//  return fib(n - 1) + fib(n - 2);
// };
//
// var Obj = function() { };
//
// Obj.prototype.doSomething = function(arg1_) {
// var callback_ = arguments[arguments.length - 1];
// let callback = (typeof(callback_) == 'function' ? callback_ : null);
// var arg1 = typeof arg1_ === 'number' ? arg1_ : null;
//
// if (!arg1)
//  return callback(new Error('first arg missing or not a number'));
//
//  process.nextTick(function() {
//
// // block on CPU
// var data = fib(arg1);
// callback(null, data);
//  });
// }
//
// var test = new Obj();
// var number = 10;
//
// test.doSomething(number, function(err,value) {
//  if (err)
// console.error(err);
//  else
// console.log('fibonaci value for %d is %d', number, value);
// });
//
// console.log('called doSomething');
