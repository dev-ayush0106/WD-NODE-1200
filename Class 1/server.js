// acquired http
const http = require("http")

// created http server
http.createServer((req,res)=>{
    // head create
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h1>Hello World</h1>")
}).listen(3000)

console.log("'Server running at http://localhost:300/")