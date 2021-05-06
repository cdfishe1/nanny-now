const router = require('express').Router();
const { Parent } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbParentData = await Parent.create({
      username: req.body.username,
      password: req.body.password,
      location: req.body.location
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbParentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbParentData = await Parent.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbParentData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbParentData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbParentData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;