var http = require("http")

var routeHandler = require("./route") 
const port = 3000


var server = http.createServer(routeHandler)


server.listen(port)

console.log(`nodejs server to ${port}`);
