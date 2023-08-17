const { Console } = require('console');

var http = require('http');
var fs = require('fs');
var p1do = "[4, 0]";
var p2do = "[4, 0]";

http.createServer(function (req, res) {
    switch (req.url) {
        case "/g1":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(p1do);
            p1do = "";
            break;
        case "/g2":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(p2do);
            p2do = "";
            break;
        case "/p1":
            fs.readFile('takpik1.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
            break;
        case "/p2":
            fs.readFile('takpik2.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
            break;
        default:
            if (req.url.slice(0, 3) == "/s1") {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end();
                p1do = "[" + req.url.slice(3, req.url.length) + "]";
                console.log(1);
            } else if (req.url.slice(0, 3) == "/s2") {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end();
                p2do = "[" + req.url.slice(3, req.url.length) + "]";
                console.log(2);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("Error 404");
                res.end();
            }
    }
}).listen(8080);