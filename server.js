// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Initializes Sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: "Super secret secret",
  // Tells our session to use cookies
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//sets up instance of hbs
const hbs = exphbs.create({});


// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
