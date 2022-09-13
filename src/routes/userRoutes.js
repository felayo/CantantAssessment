const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express.Router();

// Endpoint for posting user information into the database
router.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res
      .status(422)
      .send({ error: "You must fill all the informations" });
  }

  try {
    const user = new User({ firstName, lastName });
    await user.save();
    res.json({
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      accountId: user.accountId,
    });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

// Update an existing user by their userID
router.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }

    await user.save();
    res.json({
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      accountId: user.accountId,
    });
  } catch (err) {
    res.status(404);
    res.send({ error: err.message });
  }
});

// fetch an existing user by their userID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ 
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      accountId: user.accountId
    });
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  let users = await User.find();
  users = users.map(
    ({
      _id: userId,
      firstName: firstName,
      lastName: lastName,
      accountId: accountId,
    }) => ({ userId, firstName, lastName, accountId })
  );
  res.json(users);
});

module.exports = router;
