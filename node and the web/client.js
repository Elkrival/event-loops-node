const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({'message': "Sup homies"})

const options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  },
  agent: false//this line will limit the outgoing request
}
//we can also maximize the amount of sockets by using agent.maxFreeSockets.
const req = http.request(options, (res)=>{
  console.log('STATUS', res.statusCode);
  console.log('HEADERS',  JSON.stringify(res.headers));
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
