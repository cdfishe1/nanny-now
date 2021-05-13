const router = require("express").Router();
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup-redo", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup-redo");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("login", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get search bar after sign up
router.get("/search", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login", { loggedIn: req.session.loggedIn });
    return;
  }
  try {
    // Pass serialized data and session flag into template
    res.render("search", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get about us page
router.get("/contact", async (req, res) => {
  try {
    res.render("contact");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
