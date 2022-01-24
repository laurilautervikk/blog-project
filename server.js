const http = require('http');

const server = http.createServer(() => {
    res.statuscode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('hello!');
});

server.listen(3000,() => {
    console.log('Server started on http://localhost:3000');
});