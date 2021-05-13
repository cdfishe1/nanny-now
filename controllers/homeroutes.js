const router = require("express").Router();
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup");
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
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get search bar after sign up
router.get("/search", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  try {
    // Pass serialized data and session flag into template
    res.render("search");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get about us page
router.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
