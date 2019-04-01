const url = require('url');

const myUrl = new URL('https://gist.github.com/potikanond/dd06d5f84d117426e887daabbf26c908');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);

console.log(myUrl.searchParams);
myUrl.searchParams.append('value','123');

myUrl.searchParams.forEach( (value,name) => {
    console.log(`${name} : ${value}`);
})

console.log(myUrl.searchParams);
myUrl.searchParams.append('value','123');

myUrl.searchParams.forEach( (value,name) => {
    console.log(`${name} : ${value}`);
})
console.log(myUrl.searchParams);
myUrl.searchParams.append('value','123');

myUrl.searchParams.forEach( (value,name) => {
    console.log(`${name} : ${value}`);
})

console.log(myUrl.searchParams);