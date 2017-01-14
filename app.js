const http = require('http'); // requires makes a reference to a exsiting object called http

const hostname = '127.0.0.1'; // localhost of the machine
const port = 3000; //port

const server = http.createServer((req, res) => { //arrow meansthat will return ajd object
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye, cruelo world!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});