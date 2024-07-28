const UserModel = require("../../models/user.model");

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please provide name",
      });
    }
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide email",
      });
    }
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Please provide password",
      });
    }

    if(password && password.length < 6){
      return res.status(400).json({
        success: false,
        message: "Password should be at least 6 characters long",
      });
    }

     const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = new UserModel(req.body, name, email, password);
  } catch (error) {}
};
