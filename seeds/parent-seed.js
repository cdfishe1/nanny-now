const { Parent } = require("../models");

const parentData = [
  {
    username: "john",
    password: "bubbles",
    email: "john@mail.com",
    location: "chicago",
    years_experience: 5,
    education: "bachelors",
    languages: "english",
    gender: "f",
  },
  {
    username: "kristina",
    password: "bubbles1",
    email: "kristina@mail.com",
    location: "chicago",
    years_experience: 4,
    education: "masters",
    languages: "english",
    gender: "f",
  },
  {
    username: "amy",
    password: "bubbles2",
    email: "amy@mail.com",
    location: "chicago",
    years_experience: 8,
    education: "associates",
    languages: "english",
    gender: "m",
  },
];

const seedParent = () => Parent.bulkCreate(parentData);

module.exports = seedParent;
