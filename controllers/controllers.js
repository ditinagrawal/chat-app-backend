const User = require("../db/models/User");

const get = async (req, res) => {
  res.send("Hii");
};

const saveUser = async (req, res) => {
  const { name, email, image } = req.body;

  // check if user already exists
  const existingUser = await User.findOne({
    email,
  });
  if (existingUser) {
    return res.send({ message: "User already exists", existingUser });
  }

  const user = new User({ name, email, image });
  await user.save();

  res.send(JSON.stringify({ message: "User saved successfully", user }));
};

module.exports = { get, saveUser };
