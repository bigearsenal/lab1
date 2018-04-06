var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var html = `<html><head><title>Избранная статья</title></head>
  <body>Александра Каролина Мария Шарлотта Луиза Юлия Датская (англ. Alexandra Caroline Marie Charlotte Louise Julia of Denmark; 1 декабря 1844, Жёлтый дворец, Копенгаген, Королевство Дания — 20 ноября 1925, Сандрингемский дворец, Норфолк, Великобритания) — датская принцесса, супруга Эдуарда VII, короля Великобритании и Ирландии, императора Индии. </body>
  </html>`;
  res.end(html);
  console.log("Server listened on port 8080");
}).listen(8080);