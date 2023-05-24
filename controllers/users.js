let users = require("../Data");

const getUsers = (req, res) => {
  res.json({ Status: "Success", Data: users });
};

const createUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ Status: "Bad Request", Data: "Fill all the fields" });
  }

  users = [...users, { id: Date.now(), name, email, age }];
  res.json({ Status: "Success", Data: users });
};

const getUser = (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      Status: "Not Found",
      Data: `User with the ${req.params.id} not found`,
    });
  }

  res.json({ Status: "Success", Data: user });
};

const deleteUser = (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      Status: "Not Found",
      Data: `User with the ${req.params.id} not found`,
    });
  }
  users = users.filter((user) => user.id !== Number(req.params.id));
  res.json({ Status: "Success", Data: users });
};
const updateUser = (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      Status: "Not Found",
      Data: `User with the ${req.params.id} not found`,
    });
  }

  const { email, age } = req.body;
  users.map((user) => {
    if (user.id === Number(req.params.id)) {
      user.age = age;
      user.email = email;
    }
  });
  res.json({ Status: "Success", Data: users });
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
