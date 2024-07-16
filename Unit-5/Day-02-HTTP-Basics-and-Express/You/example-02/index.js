const express = require("express");
const fs = require("fs");
const { METHODS } = require("http");

const app = express();

app.use(express.json());

// GET METHOD =>

app.get("/", (req, res) => {
  res.send("Home Page");
});

// app.get("/reports", (req, res)=>{
//     res.send("Reports Page")
// })

app.get("/students", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  console.log(data.teachers);
  res.send("Working on it");
});

// POST METHOD =>

// app.post("/add", (req, res)=>{
//     console.log(req.body);
//     res.send("Add Page")
// })

// app.post("/addteachers", (req, res)=>{
// const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
// data.teachers.push(req.body)
// fs.writeFileSync("./db.json", JSON.stringify(data))
// res.send("Data has been added")
// })

// app.post("/addteachers", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   data.teachers.push(req.body);
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("Data has been added");
// });

// app.post("/addteachers", (req, res)=>{
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//   data.teachers.push(req.body)
//   fs.writeFileSync("./db.json", JSON.stringify(data))
//   res.send("data has been added")
// })

// app.post("/addteachers", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   data.students.push(req.body);
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been Added");
// });

app.post("/addteachers", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.teachers.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("data has been Added");
});




// PATCH METHOD =>

// app.patch("/updatestudent", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   for (let i = 0; i <= data.students.length -1; i++) {
//     if (data.students[i].name === "Tunnu") {
//       data.students[i].city = req.body.city;
//     }
//   }
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been updated");
// });

// app.patch("/updateteacher", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   for (let i = 0; i <= data.teachers.length - 1; i++) {
//     if (data.teachers[i].name === "nagesh") {
//       data.teachers[i].age = req.body.age;
//     }
//   }
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been updated");
// });

// app.patch("/updateteacher", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   for (let i = 0; i <= data.teachers.length - 1; i++) {
//     if (data.teachers[i].name === "nagesh") {
//       data.teachers[i].age = req.body.age;
//     }
//   }
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been updated");
// });

app.listen(8080, () => {
  console.log("App is running on 8080");
});
