const express = require("express");
const validationMiddleware = require("./middlewares/validation.middlewares");
const homeRouter = require("./routes/routes");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(validationMiddleware);

app.use("/add",homeRouter)

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
