const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routs[req.url]);
});

const routs = {
    '/': "Node course",
    '/books': 'Node.js book',
    '/author': 'Authors list',
    '/about': 'Info about the course'
}

server.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});