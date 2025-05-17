const {Console} =require('console');
const fs=require('fs');
const http=require('http');

const port=process.env.PORT|| 3000;

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1> this is codewithHarry</h1> <p>hey this is way to rock the world!</p>');
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> About is codeWithHarry</h1> <p>hey this is way to rock the world!</p>');
    }

    else if(req.url=='/hello'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
       res.end(data.toString());
    }
    else{
        
        res.statusCode=404;
        res.end('<h1> Not found </h1> <p>hey this is way to rock the world!</p>');
    }

});

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});