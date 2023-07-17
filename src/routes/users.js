const { Router } = require("express");
const postUser = require("../controllers/users/postUser");
const getUsers = require("../controllers/users/getUsers");
const getUserById = require("../controllers/users/getUserById");

const router = Router();

router.post("/", async (req, res) => {
  const createdUser = await postUser(req.body);

  if (createdUser.error) {
    res.status(400).json({ error: createdUser.error });
  } else {
    res.status(200).json(createdUser);
  }
});

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);

  if (user.error) {
    res.status(404).json({ error: user.error });
  } else {
    res.status(200).json(user);
  }
});

module.exports = router;
