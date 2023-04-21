const http = require('http');

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const CONTENT_TYPE_HTML = 'text/html';

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      const html = `
        <html>
          <body>
            <p>Johnny</p>
          </body>
        </html>`;
      
      res.writeHead(STATUS_OK, { 'Content-Type': CONTENT_TYPE_HTML });
      res.end(html);
    } else if (req.url === '/admin') {
      // Return a page with a message saying 'This is admin Page.'
      const html = `
        <html>
          <body>
            <p>This is admin Page.</p>
          </body>
        </html>`;
      
      res.writeHead(STATUS_OK, { 'Content-Type': CONTENT_TYPE_HTML });
      res.end(html);
    } else {
      res.writeHead(STATUS_NOT_FOUND, { 'Content-Type': CONTENT_TYPE_HTML });
      res.end('<html><body><h1>404 Not Found</h1></body></html>');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': CONTENT_TYPE_HTML });
    res.end(`<html><body><h1>500 Internal Server Error</h1><p>${error.message}</p></body></html>`);
  }
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
