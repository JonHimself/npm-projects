const http = require("http");

/////res.end sends a response and turns off the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We cant seem t ofind the page you are looking for</p>
  <a href="/">Back to Home</a>
  `);
});

server.listen(5000, () => console.log("listening to port 5000 hottie 🍆"));
