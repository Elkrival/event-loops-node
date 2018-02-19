// /*The asynchronous library now added as promises to javascript allows for control flow, using methods like waterfall, serial, parallel etc.
//
// “Example 3-5, I used async.waterfall to open and read a data file using fs.readFile, perform the synchronous string substitution, and then write the string back to the file using fs.writeFile. Pay particular attention to the callback function used with each step in the application.”
//
// The waterfall method takes an array with tasks, and a final callback. each function calls on a callback function with the paramters err or data, when all the functions in the array are passed then it will complete with a final function outside of the array that will process the result or error.
//
// async library specifies anonymous functions, but for easier debugging we will use named functions */
//
// // const fs = require('fs')
// // const async = require('async')
// //
// // async.waterfall([
// //   function readData(callback
// //     fs.readFile('./data/data1.text', 'utf8', (err, data)=>{
// //       callback(err, data)
// //     })
// //   },
// //   function modify(text, callback){
// //     const adjdata = text.replace(/somecompany\.com/g,'burningbird.net');
// //     callback(null, adjdata)
// //   },
// //   function writeData(text, callback){
// //     fs.writeFile('./data/data1.txt', text, (err)=>{
// //       callback(err,text)
// //     });
// //   }
// // ],
// // function(err, result){
// //   if (err) {
// //     console.error(err.message);
// //   }else {
// //   console.log(result);
// //   }
// // })
//
// /* This is the example written in chapter 2 because in chapter2 is callback hell, with the async function it will flatten the function without all the indentation*/
//
// const fs = require('fs'),
//  async = require('async'),
//  _dir = './data/';
//
//  const writeStream= fs.createWriteStream('./log2.txt',
// {'flags':'a',
//  'encoding': 'utf8',
//  'mode': 0666});
//
//  async.waterfall([
//    function readDir(callback){
//      fs.readdir(_dir, (err, files)=>{
//        function callback(err, files){
//          if (err) {
//            console.log(err.message);
//          }else {
//            files
//          }
//        };
//      })
//    },
//    function loopFiles(files, callback){
//      files.forEach((name)=>{
//        callback(null, name)
//      })
//    },
//    function checkFile(file, callback){
//      fs.stat(_dir+file, (err, stats)=>{
//        callback(err, stats, file)
//      })
//    },
//    function readData(stats, file, callback){
//      if (stats.isFile())
//        fs.readFile(_dir+file,'utf8', function(err, data){
//          callback(err, file, data)
//       })
//    },
//    function modify(file, text, callback){
//      const adjData=text.replace(/somecompany\.com/g,'burningbird.net')
//      callback(null, file, adjData)
//    },
//    function writeData(file, text, callback){
//      fs.writeFile(_dir+file, text,(err)=>{
//        callback(err, file)
//      })
//    },
//    function logChange(file, callback){
//      writeStream.write('changed'+file+'\n','utf8', (err)=>{
//        callback(err)
//      })
//    }
//  ],
//   function(err){
//     if (err) {
//       console.error(err.message);
//     }else {
//       console.log('modified file');
//     }
//   })
