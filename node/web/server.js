const http = require('http');

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200; // ok
        res.setHeader('Content-Type', 'text/html');
        if (req.url === "/now") {
            res.end(`<h1>Now : ${new Date()}</h1>`); // send to client
        }
        else
            if (req.url === "/hello") {
                res.end('<h1>Hello Node World</h1>'); // send to client
            }
            else{
                res.end('<h5>Invalid URL</h5>'); 
            }
    }
);

// Http sever runs at port 8888
server.listen(8888, 'localhost',
    () => {
        console.log('Server running...');
    });