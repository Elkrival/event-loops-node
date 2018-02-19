const util = require('util')
const today = new Date();

const test = {
  a:{
    b:{
      c:{
        d:'test'
      },
      c2: 3.50
    },
    b2:true
  },
  a2: today
}
util.inspect.styles.boolean = 'blue';
util.inspect.styles.number = 'red';
util.inspect.styles.string = 'black'
//output with util.inspect direct formatting we can specify how each data type will log to the console, and their colors
const str = util.inspect(test, {depth:4, colors:true})
console.log(str);
//output using console.dir and options
console.dir(test, {depth:4, colors:true})
//output using basic console.log
console.log(test);
//json stringify
console.log(JSON.stringify(test, null, 4));
