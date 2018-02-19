const us = require('underscore')
// us.each(['apple', 'cherry'], (fruit)=>{
//   console.log(fruit);
// })

us.mixin({
  betterWithNode: function(str){
    return str +' is better with node'
  }
})
console.log(us.betterWithNode('chocolate'));
