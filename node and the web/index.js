// const http = require('http')
// const server = http.createServer().listen(8124)
//
// server.on('request', (request, response)=>{
//   response.writeHead(200, {'Content-Type': 'text/plain'})
//   response.end('Hello World\n')
//   // console.log(request.headers,'##########');
//   // console.log('---------------',request.rawHeaders);
//
//   console.log(request.headers.host, 'this is host');
//   console.log(request.rawHeaders[0], 'is', request.rawHeaders[1]);
// })
// console.log('server.listening on 8124');
/*

---------Server that listens to POST DATA -------
const http = require('http')
const querystring = require('querystring')

const server = http.createServer().listen(8124)
server.on('request', (request, response)=>{
  if(request.method == 'POST'){
    let body = '';

    //append data chunk to body
    request.on('data', (data)=>{
      body += data
    })
    //data is transmitted
    request.on('end', ()=>{
      const post = querystring.parse(body);
      console.log( post);
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.end('Hello bitches\n')
    })
  }
})
console.log('server is listening on 8124');
*/

/*--------HTTP CLIENT POSTING DATA TO SERVER---------

const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({'message': "Sup Bitches"})

const options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
}

const req = http.request(options, (res)=>{
  console.log('STATUS': res.statusCode);
  console.log('HEADERS' + JSON.stringify.res.headers);
  res.setEncoding('utf8')
  //now data appears as chunks
  res.on('data', (chunk)=>{
    console.log('BODY: ', chunk);
  })
  res.on('end', ()=>{
    console.log('No more data in response');
  })
})

req.on('error', (e)=>{
  console.log('problem with request', e.stack, e.message);
})

req.write(postData)
req.end()

*/
/*
const dns = require('dns')
try{
  const result = lookup()
  return result
}
catch(e){
  console.log(e);
}
async function lookup(){
    await dns.lookup('oreilly.com',{all:true}, (err,family)=> {
     if (err) return console.log(err);
     console.log(family);
    })
    await dns.resolve('oreilly.com', 'MX', (err, addresses)=>{
      if (err) return err
      console.log(addresses);
    })
}

*/

/**/

const os = require('os')

console.log(`using the end of the line ${os.EOL}, to insert a new line`);
console.log(os.endianness());
console.log(os.tmpdir());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.cpus());
