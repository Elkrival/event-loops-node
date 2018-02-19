/* This will hold code for Event Loop and timers*/

/*setTimeout takes two arguments, a callback function as the first parameter and a delay time in milliseconds as it's second parameter setTimeout also completes the application that's being run*/

 //basic example
// setTimeout((name) => { the name of the argument is passed in the callback function
//   console.log(`Hello! ${name}`);
// }, 3000, this is the timer value in milliseconds
// 'Ivan')
// console.log('waiting on timeout'); this prints out immediately because this function is Asynchronous

/*
#### This next example shows how to clear the timer, to do this we assign our setTimeout function to a variable and then the clearTimeout function is used to clear the timer.


*/

// const timer1 = setTimeout(name => {
//   console.log(`Hello! ${name}`);
// }, 3000, 'Ivan')
// console.log('waiting on timeout');
//
// setTimeout((timer)=>{
//   clearTimeout(timer);
//   console.log('cleared timer');
// }, 3000, timer1)
/* In a different manner the setInterval function works similar to setTimeout the difference is that the function will continue to fire until it is cleared in this application the timer is cleared out after the application runs 9 times. The interval function activates ever 3 seconds whereas the setTimeout function clears the interval after 30 seconds. */

// const interval = setInterval( name => {
//   console.log("Hello", name);
// }, 3000, 'Ivan');
//
// setTimeout( interval => {
//   clearInterval(interval);
//   console.log('cleared timer');
// }, 30000, interval)
// console.log('waiting on first interval');

/* The interval and timeout functions are used in both the browser and Node. ## There are two functions that can be chained as methods in Node ## These are *ref() and unref()*
#unref() is used to terminate the timer if the timer is the only event in the event queue
#ref() Keeps the program going until the timer has processed */

//## unref() examples
//####Example 1
// const timer = setTimeout( name => {
//   console.log('hello', name);
// }, 30000, 'Ivan')
// timer.unref();
// console.log('waiting on timer....');

//#####Example 2
/* calling an unref() on the timer and using  setTimeout the timer is allowed to continue, this is because unref only works when there is one event. The interval event have kept the timer alive long enough to allow the timer to clear the interval*/

// const interval = setInterval(name => {
//   console.log('Hello', name);
// }, 3000, 'Ivan');
//
// const timer = setTimeout(interval => {
//   clearInterval(interval);
//   console.log('cleard timer');
// }, 30000, interval);
// timer.unref()
// console.log('waiting on first interval');

/* ###### Other node timer only functions
#setImmediate- it creates an event but it activates before the events created by setTimeout() and setInterval(). It doesn't have activate before I/O events. There's no timer on this event.
The event is emitted after all I/O events before any timer events, and in the current event queue

val1 = callFunctionA()
val2 = callFunctionB(val1)
val3 = callFunctionC(val2)
This is common in node code, to call functions and pass their values as they are returned, because all of the functions are synchronous the calls won't get out of sequence
*/
//example of synchronous code
// const fs = require('fs')
// try {//we wrap the functions in a try block to allow a more informative exception handling, aka error handling because node errors can be awful. this makes it easier to debug errors in node
//   const data = fs.readFileSync('./apples.text', 'utf8')
//   console.log(data);
//   const adjData = data.replace(/[A|a]pple/g, 'orange');
//   fs.writeFileSynce('./oranges.txt', adjData);
// } catch (e) {
//   console.error(e);
// }

//### converted to Asynchronous code

/* To convert these applications from synchronous to Asynchronous we use the builtin functions that are counterparts to try and catch. By implementing try and catch we will find that we are looking for an error outside of a process. Therefore we remove try and catch block is processed before the Asynchronous/callback function is performed.

Otherwise all of the code is floating around in the heap
 */

 /* This example we use the callback to first run the program, and check for an error. If there is no error then we process the data and continue with application code.*/

// const fs = require('fs')
// fs.readFile('./apples.txt', 'utf8', (err, data)=>{
//   if (err) {
//     console.error(err.stack);
//   }else{
//     const adjData = data.replace(/apple/g, 'orange');
//     fs.writeFile('./oranges.txt', adjData, (err)=>{
//       if (err) console.error(err);
//     })
//   }
// })


/* On this example we add another Asynchronous callback that is nested. This poses new challenges for error handling. */

// const fs = require('fs')//require fs module
// const writeStream = fs.createWriteStream('./log.txt',//create a write stream function of filesystem, that will be logged to our log.txt file.
// {'flags': 'a',
//   'encoding': 'utf8',
//   'mode': 0666});
//   let counter = 0
// writeStream.on('open', ()=>{//write stream will follow 'open' argument
//   fs.readdir('./data/', (err, files)=>{//this function/method will navigate to our data directory, and then run an callback function with an err, and files argument. if err else files
//     if (err) {
//       console.error(err.message);
//     }else {
//       files.forEach((name)=>{//if everything is copacetic we will loop through each file using a forEach loop and pass the name of the file.
//         fs.readFile(`./data/${name}`, `utf8`, (err, data) => {//we call the fs readFile function, which we pass the directory and name of the file to read from. Then we perform our callback function passing in err and this time data.
//           if (err) {
//             console.error(err.message);
//           }else {
//             const adjData = data.replace(/somecompany\.com/g, 'burningbird.net');// then if everything is kosher we will make a variable that will adjust the data via the replace method. In this method we are taking in the argument somecompany and replacing it with burningbird.net
//             fs.writeFile(`./data/${name}`, adjData, (err) =>{//finally we will perform the writeFile function. ### This function will run at the same time as the readFile function. As the read file function is occurring so will write function. The arguments and parameters of this function are as follow. The directory and file name, what we are writing  in this method it is the adjust data variable, and a callback function for error checking.
//               if (err) {//if error log error
//                 console.error(err.message);
//               }else{ //otherwise the write method will be called, following a callback function to process error checking.
//                 writeStream.write(`changed ${name} utf8`, (err) =>{
//                   if(err){ console.error(err.message);
//                   }else {
//                     console.log(`finished ${name}`);
//                     counter++
//                     if(counter >= files.length){
//                       console.log('all done');
//                     }
//                   }
//                 })
//               }
//             })
//           }
//         })
//       })
//     }
//   })
//   writeStream.on(`error`, (err)=>{ //final function will create a writeStream with an error callback
//     console.error(`Error ${err}`);
//   })
// })

// const fs = require('fs')
// const writeStream = fs.createWriteStream('./log.txt', {
//   flags: 'a',
//   encoding: 'utf8',
//   mode: 0666
// })// this function creates a log file that writes the actions
//
// writeStream.on('open', () =>{
//   let counter = 0;
//   //get list of files
//   fs.readdir('./data/', (err, files) =>{
//     if (err) {
//       console.error(err.message)
//     }else{
//       files.forEach((name)=>{
//         fs.stat(`./data/${name}`, (err, stats)=>{
//           if(err) return err;
//           if(!stats.isFile()){
//             counter++;
//             return;
//           }
//           //modify contents
//           fs.readFile('./data/' + name, 'utf8', (err, data)=>{
//             if(err){
//               console.error(err.message);
//             }else {
//               const adjData= data.replace(/somecompany\.com/g, 'burningbird.net');
//               //write to file
//               fs.writeFile('./data/' + name, adjData, (err) =>{
//                 if (err) {
//                   console.error(err.message)
//                 }else {
//                   writeStream.write('changed'+ name + '\n', (err)=>{
//                     if (err) {
//                       console.error(err.message);
//                     }else {
//                       console.log('finished'+ name);
//                       counter++
//                     }if(counter >= files.length){
//                       console.log(`all done`);
//                     }
//                   })
//                 }
//               })
//             }
//           })
//         })
//       })
//     }
//   })
//   writeStream.on('error', (err)=>{
//     console.error('Error', err);
//   })
// })
