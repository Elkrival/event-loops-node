// const vm = require('vm')//calls module
// const sandbox = {//creates context
//   process: 'this baby',
//   require: 'that',
//   console: console
// }
// vm.runInNewContext('console.log(process); console.log(require)', sandbox)//runs vm module's new context function, we use console log to show that we are in a different context of the code and we use sandbox to list our process and requirement. We list all the modules and methods we want to import through the sandbox to run in the context otherwise it will not work.

/* In this piece of code we will be using the runInThisContext function of the script to show how we can access global variables but not the local variables. IN the prior example we use runInNewContext function to remove all global variables however with the sandbox we bring in the required modules, and methods we want to use from the global object.

runInThisContext can work outside in
runInNewContext can work inside only

####THIs script only runs in ES5 notES6 anything inside the VM module will need to be in ES5 it will not run in es6*/

// var vm = require('vm');
//
// global.count1 = 100;
// var count2 = 100;
// var txt = 'if (count1 === undefined) var count1 = 0; count1++;' +
//  'if (count2 === undefined) var count2 = 0; count2++;' + 'console.log(count1); console.log(count2);';
//
// var script = new vm.Script(txt);
// script.runInThisContext({filename: 'count.vm'});
//
// console.log(count1);
// console.log(count2);

/* With this example we can also see how we can assign global variables that can be accessed inside the VM and in the application. We use the global method. Otherwise we have two different local variables, one that is accessed inside the application and the other that is accessed inside the vm

It's important to note that because there is a local variable in the application we must also label it inside our function otherwise we will get an error

We must also specifiy a filename name inside the script for debugging purposes*/

// const vm = require('vm')
// global.count1 = 100;
// const count2 = 100;
// const txt = 'if (count1 === undefined) var count1 = 0; count1++;' +
//  'if (count2 === undefined) var count2 = 0; count2++;' + 'console.log(count1, "boom"); console.log(count2, "bam");';
//
// const script = new vm.Script(txt);
// script.runInThisContext({filename: 'count.vm'});
//
// console.log(count1, 'woop');
// console.log(count2, 'what');

// const vm = require('vm');
//
// global.count1=100
// const count2 =100
//
// const txt = 'count1++;'+
//             'count2++;'+
//             'console.log(count1); console.log(count2);';
// let script = new vm.Script(txt,{filename: 'count.vm'})
//
// try{
//   script.runInThisContext();
// }catch(err){
//   console.log(err.stack);
// }

/* In this example we are precompiling the code we want to run in a different file that is also with a js extension. By using the fs package and functions we can have access to this code and bring it to our sandbox.

We call our fs.readFileSync function inside our vm.Script function to read our external script.js file. We must do this because require() is not available in our script.js file and fs is also a local variable.

Our external file is script.js*/

// const vm = require('vm')
// const fs = require('fs')
// global.count1=100
// const count2=100
// const script = new vm.Script(fs.readFileSync('script.js', 'utf8'));
// script.runInThisContext({filename:'count.vm'})
// console.log(count1);
// console.log(count2);

/*This example shows the power of runInContext. This method takes a sandbox like our runInContext method. The sandbox must be contextualized, before we call the function, our runInContext function we run our sandbox inside our createContext function*/
const vm = require('vm')
const util = require('util')
const sandbox = {
  count1 :1
}
vm.createContext(sandbox);
if (vm.isContext(sandbox)) console.log('contextualized');
vm.runInContext('count1++; counter=true', sandbox, {filename: 'context.vm'})
console.log(util.inspect(sandbox));
