const { Nanny } = require("../models");

const nannyData = [
  {
    username: "natalie",
    password: "password",
    location: "chicago",
    years_experience: 2,
  },
  {
    username: "ashley",
    password: "password1",
    location: "chicago",
    years_experience: 5,
  },
  {
    username: "jaden",
    password: "password2",
    location: "chicago",
    years_experience: 4,
  },
];

const seedNanny = () => Nanny.bulkCreate(nannyData);

module.exports = seedNanny;
