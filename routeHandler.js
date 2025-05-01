const fs = require("fs");
const url = require("url");


const routeHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;

    if (pathName === '/') {
        fs.readFile("index.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }

    else if (pathName === '/manager') {
        fs.readFile("manager.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }

    else if (pathName === '/create' && req.method === 'POST') {
        const data = [];

        req.on("data", chunk => {
            data.push(chunk);
        });

        req.on("end", () => {
            const result = Buffer.concat(data).toString();
            const parsedData = result.split("=")[1];

            fs.appendFile("blog.txt", parsedData + "\n", err => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Sunucu hatası.");
                } else {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    res.end();
                }
            });
        });
    }

    else if (pathName === '/create') {
        fs.readFile("form.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }

    else if (pathName === '/blog') {
        fs.readFile("blog/blog.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }

    else if (pathName.startsWith("/blog/")) {
        const match = pathName.match(/^\/blog\/([\w-]+)$/);
        console.log(match);
        
        if (match) {
            const blogId = match[1];
            fs.readFile(`blog/blog-${blogId}.html`, (err, html) => {
                if (err) {
                    fs.readFile("404.html", (e404, errorPage) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.write(errorPage);
                        res.end();
                    });
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end();
                }
            });
        } else {
            fs.readFile("404.html", (err, html) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(html);
                res.end();
            });
        }
    }

    else {
        fs.readFile("404.html", (err, html) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }
};

module.exports = routeHandler;
