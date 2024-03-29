const express = require('express');
const bcrypt = require('bcrypt'); // bcrypt is used to hash password before saving it to database
const fs = require('fs'); // fs is node's inbuilt file system module used to manage files

const usersDb = require('../database/db.json'); // import existing data from db.json file
const generateJWT = require('../utils/generateJWT');
const authenticate = require('../middleware/authenticate');
const router = express.Router(); // we create a new router using express's inbuilt Router method

// user registration / sign-up
router.post('/sign-up', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await usersDb.filter((user) => user.email === email);

    if (user.length > 0) {
      return res.status(400).json({ error: 'User already exist!' });
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = {
      id: usersDb.length,
      name: name,
      email: email,
      password: bcryptPassword
    };

    usersDb.push(newUser); // we add newUser to usersDb array

    // we save the updated array to db.json file by using fs module of node

    await fs.writeFileSync('./database/db.json', JSON.stringify(usersDb));

    /* Once the user registration is done successfully, we will generate a
      jsonwebtoken and send it back to user. This token will be used for
      accessing other resources to verify identity of the user.
      
      The following generateJWT function does not exist till now but we
      will create it in the next step. */

    const jwtToken = generateJWT(newUser.id);

    return res.status(201).send({ jwtToken: jwtToken, isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user sign-in / login
router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersDb.filter((user) => user.email === email);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid Credential', isAuthenticated: false });
    }

    // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration
    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid Credential', isAuthenticated: false });
    }

    // if the password matches with hashed pausersDb.push(newUser); /    return res.status(200).send({ jwtToken, isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user authorization
router.post('/auth', authenticate, (req, res) => {
  try {
    res.status(200).send({ isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message, isAuthenticated: false });
  }
});

module.exports = router; // we need to export this router to implement it inside our server.js file
