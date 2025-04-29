var http = require("http")
var fs = require("fs")
const port = 3000


var server = http.createServer((req,res) => {

    if(req.url === '/'){
        fs.readFile("index.html",(error,html) => {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html)
            res.end()
        })
    }
    else if(req.url==='/manager'){
        fs.readFile("manager.html",(error,html) => {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html)
            res.end()
        })
    }
    else{
        fs.readFile("404.html",(error,html) => {
            res.writeHead(404,{"Content-Type":"text/html"})
            res.write(html)
            res.end()
        })
    }
    
})


server.listen(port)

console.log(`nodejs server to ${port}`);
