const http=require('http')

const port=process.env.port|| 3000;
const server=http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> this is codewithharry</h1> <p>hey this is way to rock the world!</p>');
})

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
});