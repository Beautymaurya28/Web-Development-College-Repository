import url from 'url';

const myURL=new URL('https://example.org:8000');
myURL.pathname='/a/b/c';
myURL.serach='?d=e';
myURL.hash='#fgh';


console.log(myURL)
console.log(myURL.href)
