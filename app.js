const uuid = require('uuid');

// console.log('Hello World!');
// console.log('uuid: ' + uuid.v4());
// console.log('uuid: ' + uuid.v4());

// const {person,Person} = require('./person.js');
const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');

// console.log(person);

// const p1 = new Person('Me',20);
// console.log(p1);

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h1>This is index.html</h1>');
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/about'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is ABOUT</h2>');
        fs.readFile(path.join(__dirname,'public','css','style.css'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url === '/public/CSS/style.css'){
        fs.readFile(path.join(__dirname,'public','CSS','style.css'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url ==='/api/users'){
        const users =[
            {name: 'A',age: 19},
            {name: 'AA',age: 19},
            {name: 'AAA',age: 19}
        ];

        res.writeHead(200, { 'content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    else{
        // res.writeHead(404, { 'content-type': 'text/html'});
        // res.end('<h3>Error 404: Not Found</h3>')
        fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(404, { 'content-type': 'text/html'});
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500; 
server.listen(PORT, () =>{
    console.log('Server is running on port: ' + PORT);
});