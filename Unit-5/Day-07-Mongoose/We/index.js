const express = require("express");
const connection = require("./config/db");
const GlassModel = require("./models/glass.model");

const app = express();
app.use(express.json());


// POST METHOD =>
app.post("/create-glass", async (req, res) => {
  const { color, brand, price, material } = req.body;
  try {
    const glass1 = new GlassModel({
      color,
      brand,
      price,
      material,
    });
    await glass1;
    glass1.save();
    res.status(201).send("glass created successfully");
  } catch (error) {
    res.status(404).send("glass not created");
  }
});


// GET METHOD =>
app.get("/get-glasses", async (req, res) => {
  try {
    const glass2 = await GlassModel.find();
    res.status(200).send({ msg: "glass fetched successfully", glass2 });
  } catch (error) {
    res.status(404).send(`error fetching glasses ${error}`);
  }
});


// PATCH METHOD =>
    app.patch("/update-glass", async(req, res)=>{
        const {id} = req.params;
        try {
            const glass3 = await GlassModel.findByIdAndUpdate({_id: id}, req.body);
            res.status(200).send({msg: "glass updated successfully", glass3})
        } catch (error) {
            res.status(404).send(`error updating glass ${error}`) 
        }
    })
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Running is server port on 8080 and connection to Database");
  } catch (error) {
    console.log("error connection to Database or server port on 8080");
  }
});
