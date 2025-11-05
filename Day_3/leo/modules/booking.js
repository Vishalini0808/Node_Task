import url from "url";

export default function bookingPage(req, res) {
  const query = url.parse(req.url, true).query;

  const name = query.name || "Guest";
  const show = query.show || "Not selected";
  const tickets = query.tickets || 1;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Booking Confirmation 🎟️</h1>");
  res.write(`<p>Name: ${name}</p>`);
  res.write(`<p>Show Time: ${show}</p>`);
  res.write(`<p>Tickets: ${tickets}</p>`);
  res.end("<h3>Thank you for booking LEO!</h3>");
}
