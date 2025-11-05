export default function homePage(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to LEO Movie Booking System 🎬</h1>");
  res.write("<p>Use /movie, /booking, or /contact in the URL.</p>");
  res.end();
}
