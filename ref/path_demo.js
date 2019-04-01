const path = require('path');

// base file name
console.log(__filename);
console.log(path.basename(__filename));

// directory name
//same bar 9 ,10
console.log(__dirname);
console.log(path.dirname(__filename));

// real name
console.log(path.basename(__dirname));

// file extension
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// create path './est/hello.html'
console.log(path.join(__dirname,'test','hello.html'));