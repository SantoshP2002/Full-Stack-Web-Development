const jwt = require("jsonwebtoken");
const usermodel = require("../model/user.model");

const authMiddleware = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send({ Message: "token not found please login first" });
    }
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, decoded)=> {
        if (err) {
          res.status(401).send({ Message: " Invalid Token " });
          return;
        }
        if (decoded) {
          const userId = decoded.id;
          const user = await usermodel.findById(userId);
          if (!user) {
            return res.status(401).send({ Message: "User not found in Auth" });
          }
          req.user = user
          next();
        }
      });
    } catch (error) {
      res.status(401).json({
        message: "Invalid Token",
      });
    }
  } 
};

module.exports = authMiddleware;
