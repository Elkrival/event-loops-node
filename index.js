'use strict'
/* This example shows the data allocation for Buffers
let a = [1, 2, 3];
let b = Buffer.from(a);
console.log(b);
let a2 = new Uint8Array([1, 2, 3]);
let b2 = Buffer.from(a2);
console.log(b2);
let b3 = Buffer.alloc(10);
console.log(b3);
let b4 = Buffer.allocUnsafe(10);
console.log(b4);
*/

/* ## this example shows the buffer being converted to JSON
let buf = new Buffer('this is my pretty example');
let json = JSON.stringify(buf)
console.log(json);
*/

/*### This example shows a Buffer to stringify
let buf = new Buffer('this is my pretty example')
let json = JSON.stringify(buf)
let buf2 = new Buffer(JSON.parse(json).data)
console.log(buf2.toString())
console.log(buf2.toString('ascii'))
console.log(buf2.toString('utf8', 11, 17));
/*

/* ##this example shows how powerful string decoder is when the toString method returns jibberish
*/
// let StringDecoder = require('string_decoder').StringDecoder;
// let decoder = new StringDecoder('utf8')
// let euro = new Buffer([0xE2, 0x82])
// let euro2 = new Buffer([0xAC])
// console.log(decoder.write(euro));
// console.log(decoder.write(euro2));
// console.log(euro.toString());
// console.log(euro2.toString());

// let buf = new Buffer(3)
// buf.write('€', 'utf-8')
// console.log(buf, buf.length);

//let buf = new Buffer(4)
//write values to buffer
// buf.writeUInt8(0x63,0)
// buf.writeUInt8(0x61,1)
// buf.writeUInt8(0x74,2)
// buf.writeUInt8(0x73,3)
//print out buffer as a string
//console.log(buf.toString());

// buf.readUInt8(0x63,0);
// buf.readUInt8(0x61,1);
// buf.readUInt8(0x74,2);
// buf.readUInt8(0x73,3);
//console.log(buf.readDoubleBE());
//console.log(buf.toString());

// let buf = new Buffer(4)
// buf[0] = 0x63;
// buf[1] = 0x61;
// buf[2] = 0x74;
// buf[3] = 0x73;
//
// console.log(buf.toString());

// let buf1 = new Buffer('this is the way we build our buffer')
// let lnth = buf1.length
//
// //create a new buffer as slice of old
// let buf2 = buf1.slice(19, lnth)
// console.log(buf2.toString());//build our buffer
// //modify second buffer
// buf2.fill('*', 0.5);
// console.log(buf2.toString()); //our buffer
// //show impact on first buffer
// console.log(buf1.toString());
// if(buf1.equals(buf2)) console.log('buffers are equal');

// let buf1= new Buffer('this is a new buffer with a string');
//
// //copy buffer
// let buf2 = new Buffer(10)
// buf1.copy(buf2)
// console.log(buf2.toString());
// let buf1 = new Buffer('1 is the nubmer one')
// let buf2 = new Buffer('2 is number two')
// let buf3 = new Buffer(buf1.length)
// buf1.copy(buf3)
//
// console.log(buf1.compare(buf2));
// console.log(buf2.compare(buf1));
// console.log(buf1.compare(buf3));
