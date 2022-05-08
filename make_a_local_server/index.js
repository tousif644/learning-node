const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hello from node local</h1>");
    res.end();
  })
  .listen(4500);

// open your terminal and write node filename.js
// then go to your browser and type localhost:your port number
//use nodemon for better result .
// ex --> nodemon index.js. this will watch your file writing and save changes the file . You have to refresh the browser that's it .
