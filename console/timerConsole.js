/* This is a way to use the console where we can see the timer from beginning to end*/
// console.time('the-loop')
// for (var i = 0; i < 10000; i++) {
//   ;
// }
// console.timeEnd('the-loop')

const http= require('http')

console.time('hello-timer')
http.createServer((request, response)=>{
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end('Hello World\n')
  console.timeEnd('hello-timer')
  console.time('hello-timer')
}).listen(8124)
console.log('Server running at 8124');
/* We can incorporate a timer into asynchronous functions to specify the timing of functions, this helps in making sure the order of asynchronous calls work*/
