// const newArray = require(`./creatingAModule.js`)
//
// console.log(newArray);//tests if import is correct
//
// console.log(newArray.concatArray('hello', ['test1', 'test2']));

/* This is the code to test our node module. This code is the object that we are creating that will run inside inputChecker. We are using a prototype.

We start by installing the necessary modules inside the imported module, then we call an instance in the new module by importing it using our inputChecker variable.
We then continue with our processes. This is due to the util library, it needs us to send an object to it. Actually this is only a test*/
//  const inputChecker = require('inputcheck').InputChecker
//  console.log(inputChecker);//tests for import
//
// const ic = new inputChecker('Ivan', 'output');
// ic.on('write', (data)=>{
//   this.writeStream.write(data, 'utf8')
// })
// ic.addListener('echo', (data)=>{
//   console.log(this.name, 'wrote', data);
// })
// ic.on('end', ()=>{
//   process.exit.()
// })
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (input)=>{
//   ic.check(input)
// })
