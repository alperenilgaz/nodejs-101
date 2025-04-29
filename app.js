var http = require("http")

const port = 3000


var server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
            
            <html>
                <head>
                    <title>anasayfa</title>
                </head>
                <body>
                    <h1>Anasayfa</h1>
                </body>
            </html>
            
            `)
            res.end()
    }

    else if(req.url === '/manager'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
             <html>
                <head>
                    <title>manager page</title>
                </head>
                <body>
                    <h1>All Manager</h1>
                </body>
            </html>
            
            
            `)
            res.end()
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
             <html>
                <head>
                    <title>404 error</title>
                </head>
                <body>
                    <h1>Page Not Found</h1>
                </body>
            </html>
            
            
            `)
            res.end()
    }

})

server.listen(port)

console.log(`node.js server to ${port}`);
