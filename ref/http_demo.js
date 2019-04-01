const http = require('http');

//create server
http.createServer( (request,response)=>{
    // write response
    response.write('Hello World!');
    response.end();
}).listen(5000, () => {
    console.log('Server is running ...');
});