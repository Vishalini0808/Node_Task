import http from "http";
import url from "url";

import homePage from "./modules/home.js";
import moviePage from "./modules/movie.js";
import bookingPage from "./modules/booking.js";
import contactPage from "./modules/contact.js";

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/" || path === "/home") {
    homePage(req, res);
  } else if (path === "/movie") {
    moviePage(req, res);
  } else if (path === "/booking") {
    bookingPage(req, res);
  } else if (path === "/contact") {
    contactPage(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("🎬 LEO Movie Booking Server running at http://localhost:3000");
});
