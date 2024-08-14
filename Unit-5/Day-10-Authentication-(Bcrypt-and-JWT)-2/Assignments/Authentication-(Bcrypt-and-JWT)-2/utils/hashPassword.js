const bcrypt = require("bcryptjs");

const hashPassword = async () => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};


module.exports = {
    hashPassword,
    comparePassword
}