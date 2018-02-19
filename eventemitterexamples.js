/*/###### Event Emitter Examples #######
/* This is the main event for handling Asynchronous functions in node using the event library

const events = require('events')//include the events module
const em = new events.EventEmitter() //create an instance of EventEmitter
//we use the EventEmitter to do perform two tasks, we attach an event handler to an event and emit the actual event. Using the EventEmitter.on method we invoke the event instance when an event is emitted. the first parameter to the function is the event, the second is the callback function that performs some functionality

em.on('someevent', (data) => {/*...})

//the event will then be emitted on the object via the EventEmitter .emit method when a condition is method

if(somecriteria){
  en.emit('data')
}
*/

//##### VERY BASIC TEST OF EVENT EventEmitter
/* This is an application that uses the eventEmitter library to change the counter by 1 every three seconds. the library is used to create events and perform an action at those times*/
/* #######################EXAMPLE
const eventEmitter = require('events').EventEmitter
let counter = 0
const em = new eventEmitter
setInterval(() =>{em.emit('timed', counter++);}, 3000)//this is the most important part the eventemitter.emit() function triggers the event
em.on('timed', (data)=>{
  console.log('timed', data);
})//the eventemitter.on()"traps" this event and process it
*/

/*##### INHERITANCE OF THE EVENT EMITTER*/
/* The util library allows a constructor to inherit the properties of a superconstructor, best library yet*/
/*
## const util = require('util')
## util.inherits(Someobj, EventEmitter);

By using util.inherits() with the object you can call the emit method within the objects methods and code event handlers on the object instances

##SomeObj.prototype.someMethod = () =>{
  this.emit('event')
}
...
##Someobjinstance.on('event', () => {})
*/

/* This example will make use of the eventEmitter library, utils inheritance. This application starts with a new class called inputChecker and it takes two values a name and a filename, the name is assigned to a property and creates a reference that is then written using fs.write() and the createWriteStream method

the object will have a check method that will check the data to trigger different events or commands, they are (wr:) which will emit the write event, and (en:) which will end the event. If no event is emitted there will be an echo event to the console. There will be three event handlers for the three events, they are as follows it write to the output file during the (wr) event it will echo during the commandless input and it will terminate on (en:) via process.exit

the input will be coming in using the process.stdin method, the output will be using the writable stream because it is a way of creating a write que in the background, because we are expecting a lot of activity the input echoed is just output through process.stdout

##### Code is on the bottom ####
*/
'use strict';
//require all the things
// const util = require('util');
// const eventEmitter = require('events').EventEmitter;
// const fs = require('fs')
//##########

/* create a function prototype that will invoke methods, this function will take a name and an output file, using fs.createWriteStream */
//
// function InputChecker(name, file){
//   this.name = name
//   this.writeStream = fs.createWriteStream('./'+file+'.text', {
//     'flags': 'a',
//     'encoding':'utf-8',
//     'mode': 0o6666
//   })
// }
/* we invoke the util function and the inherit method, within that function we add the two arguments the first is our {object}, the second is the instance of the library we want our {object} to inherit. In this case we want InputChecker to inherit the methods of EventEmitter */

// util.inherits(InputChecker, eventEmitter);

/*This part of the code adds a 'check', method to our {object} prototype, this performs a check of the incoming data and what actions to take. This new method takes the input of our {object} prototype, and it has the mutable command method, that takes the input and then the trim() is added to the input to remove the white space.
The command method is then put through a test via the if(condition) function, based  that checks the input for the following conditions. (wr: ) if this condition is met in our input then the emit('write') method will activate, if the (en:) condition is part of the input then the emit('end') method will activate, all other events will be met with the emit('echo') method*/

// InputChecker.prototype.check = function check(input){
//   //trim extra white space
//   let command = input.trim().substr(0,3);
//   //proces commands
//   //if wr, write input to file
//   if (command =='wr') {
//     this.emit('write', input.substr(3,input.length));
//     //if en, end process
//   }else if (command == 'en') {
//     this.emit('end');
//     //just echo back to standard output
//   }else {
//     this.emit('echo', input)
//   }
// }
//testing new object and event handlings
/* this is our new copy of InputChecker that will test our function*/

// let ic = new InputChecker('Ivan', 'output')
// ic.on('write', (data) =>{
//   this.writeStream.write(data, 'utf8');
// })
// ic.on('echo', (data) =>{
//   process.stdout.write(ic.name + ' wrote ' + data)
// })
// ic.on('end', () => {
//   process.exit()
// })
//capture input after setting encoding

// process.stdin.setEncoding('utf8')
// process.stdin.on('readable', () =>{
//   let input = process.stdin.read()
//   if (input!==null) {
//     ic.check(input)
//   }
// })
