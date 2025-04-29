var http = require("http")

const port = 3000


var server = http.createServer((req,res) => {

    // console.log(req.url,req.method);
    // console.log(res.statusCode);


    res.setHeader("Content-Type","text/html")
    res.statusCode=200
    res.statusMessage="OK"

    res.write("<h1>Anasayfa</h1>")

    res.end()
})

server.listen(port)

console.log(`node.js server to ${port}`);
