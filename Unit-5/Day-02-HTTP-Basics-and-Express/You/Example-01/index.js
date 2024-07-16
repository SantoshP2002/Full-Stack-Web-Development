const http = require("http");
const fs = require("fs");
// console.log("HTTP OUTPUT", http);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>You are on Home Page</h2>");
  } else if (req.url === "/reports") {
    res.end("Your are on Reports page");
  } else if (req.url === "/data") {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        res.end(err);
      } else {
        res.setHeader("content-type", "application/json");
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/posts") {
    res.end("Your are on posts Page");
  } else if (req.url === "/blogs") {
    res.end("Your are on Blogs Page");
  } else if (req.url === "/about") {
    // res.write("Your are on About Page 1\n");
    // res.write("Your are on About Page 2\n");
    // res.write("Your are on About Page 3\n");
    res.write("Your are on About Page 4\n");
    res.end();
  } else if (req.url === "/add") {
    const user = {
      id: 11,
      name: "John",
      age: 100,
    };

    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    data.push(user);

    fs.writeFileSync("./data.json", JSON.stringify(data));
    res.end("User added successfully");
  } else if (req.url === "/new" && req.method === "POST") {
    let str = "";
    req.on("data", (chunk) => {
      str = str + chunk;
    });
    req.on("end", () => {
      console.log(str);
    });
    res.end("Data send");
  } else {
    res.end("404 page Not Found");
  }
});

server.listen(8080, () => {
  console.log("server is running on 8080");
});
