const fs = require("fs");

function isArrayOfString(arr) {
  return (
    Array.isArray(arr) &&
    arr.every((el) => typeof el === "string" && el.length > 0)
  );
}

const validationMiddleware = (req, res, next) => {
  let errors = [];

  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  if (Object.keys(req.body).length < 1) {
    errors.push("invalid request body.");
  } else {
    if (!ID || typeof ID !== "number" || ID < 0) {
      errors.push("ID is required and type of ID must be number.");
    }

    if (!Name || typeof Name !== "string") {
      errors.push("Name is required and the type of name must be string.");
    }

    if (!Rating || typeof Rating !== "number" || Rating < 0) {
      errors.push("Rating is required and the type of Rating must be number.");
    }

    if (!Description || typeof Description !== "string") {
      errors.push(
        "Description is required and the type of name must be string."
      );
    }

    if (!Genre || typeof Genre !== "string") {
      errors.push("Genre is required and the type of name must be string.");
    }

    if (!isArrayOfString(Cast) || Cast.length === 0) {
      errors.push(
        "Cast is required and the type of Cast must be a array and it contain string."
      );
    }
  }
  if (errors.length > 0) {
    try {
      fs.writeFileSync("./res.txt", errors.join("\n"));
      let data = fs.readFileSync("./res.txt", "utf-8");
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
};

module.exports = validationMiddleware;
