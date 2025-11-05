export default function contactPage(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Contact Us 📞</h1>");
  res.write("<p>Email: support@leobooking.com</p>");
  res.write("<p>Phone: +91 98765 43210</p>");
  res.end();
}
