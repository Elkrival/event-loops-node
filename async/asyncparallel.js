/*----------------
      parallel async
--------------------*/
/* callback needs to be outside of object and outside of array*/

const fs = require('fs')
  async = require('async')

async.parallel({
  data: function (callback){
    fs.readFile('../data/fruit1.txt', 'utf8', (err, data)=>{
      console.log(data);
      callback(err, data)
    })
  },
  data2: function (callback){
    fs.readFile('../data/fruit2.txt', 'utf8', (err, data)=>{
      console.log(data);
      callback(err,data)
    })
  },
  data3: function (callback){
    fs.readFile('../data/fruit3.txt','utf8',(err, data)=>{
      console.log(data);
      callback(err,data)

    })
  },
},
  function(err, result){
    console.log(result);
  })
