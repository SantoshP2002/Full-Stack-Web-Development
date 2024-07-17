const express = require("express");
const fs = require("fs");


const app = express();

app.use(express.json());

// GET METHOD =>

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/reports", (req, res)=>{
//     res.send("Reports Page")
// })

// EX : 01
// app.get("/students", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   console.log(data.teachers);
//   res.send("Working on it");
// });

// EX : 01

app.get("/students", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  console.log(data.students);
  res.send("data has been get");
});

// POST METHOD =>

// EX: 01
// app.post("/add", (req, res)=>{
//     console.log(req.body);
//     res.send("Add Page")
// })

// EX: 02
// app.post("/addteachers", (req, res)=>{
// const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
// data.teachers.push(req.body)
// fs.writeFileSync("./db.json", JSON.stringify(data))
// res.send("Data has been added")
// })

// EX: 03
// app.post("/addteachers", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   data.teachers.push(req.body);
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("Data has been added");
// });

// EX: 04
// app.post("/addteachers", (req, res)=>{
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//   data.teachers.push(req.body)
//   fs.writeFileSync("./db.json", JSON.stringify(data))
//   res.send("data has been added")
// })

// EX: 05
// app.post("/addteachers", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   data.students.push(req.body);
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been Added");
// });

// EX: 06
// app.post("/addteachers", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   data.teachers.push(req.body);
//   fs.writeFileSync("./db.json", JSON.stringify(data));
//   res.send("data has been Added");
// });

app.post("/addteachers", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.teachers.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("data has been added");
});

// PATCH METHOD =>

// EX: 01
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

// EX: 02
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

// EX: 03
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

// EX: 04
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

// EX:05
// app.patch("/updateteacher", (req, res)=>{
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//   for(let i=0; i<= data.teachers.length -1; i++){
//     if(data.teachers[i].name ===  "sonu Rathod"){
//       data.teachers[i].city = req.body.city
//     }
//   }
//   fs.writeFileSync("./db.json", JSON.stringify(data))
//   res.send("data has been updated")
// })

// EX: 06
app.patch("/updateteacher", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  for (let i = 0; i <= data.teachers.length - 1; i++) {
    if (data.teachers[i].name === "sonu rathod") {
      data.teachers[i].city = req.body.city;
    }
  }
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("data has been updated");
});

// DELETE METHODS =>

// EX: 01
// app.delete("/deleteteacher", (req, res)=>{
//     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//     const new_arr = data.teachers.filter((ele)=>{
//         return ele.name !== "santosh"
//     })
//     data.teachers = new_arr
//     fs.writeFileSync("./db.json", JSON.stringify(data))
//     res.send("data has been deleted")
// })

// EX: 02
// app.delete("/deleteteacher", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//   const new_arr = data.teachers.filter((ele)=>{
//       return ele.name !== "Ankush"
//   })
//   data.teachers = new_arr
//   fs.writeFileSync("./db.json", JSON.stringify(data))
//   res.send("data has been deleted")
// });

// EX: 03
// app.delete("/deleteteacher", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//   const new_arr = data.teachers.filter((ele) => {
//     return ele.name !== "Bablu";
//   });
//   data.teachers = new_arr
//   fs.writeFileSync("./db.json", JSON.stringify(data))
//   res.send("data has been deleted")
// });

// EX : 04
// app.delete("/deleteteacher", (req, res)=>{
//     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
//     const new_arr = data.teachers.filter((ele)=>{
//       return ele.name !== "sanka"
//     })
//     data.teachers = new_arr
//     fs.writeFileSync("./db.json", JSON.stringify(data))
//     res.send("data has been deleted")
// })

// EX :05
app.delete("/deleteteacher", (req, res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    const new_arr = data.teachers.filter((ele)=>{
      return ele.age > 40
    })
    data.teachers = new_arr
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("data has been deleted")
})

app.get("/movie", (req, res)=>{
  const movie = (fs.readFileSync("./data.txt", "utf-8"))
  res.send(movie)
})

app.listen(8080, () => {
  console.log("App is running on 8080");
});
