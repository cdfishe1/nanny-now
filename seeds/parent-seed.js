const { Parent } = require("../models");

const parentData = [
  {
    username: "john",
    password: "bubbles",
    email: "john@mail.com",
    location: "chicago",
  },
  {
    username: "kristina",
    password: "bubbles1",
    email: "kristina@mail.com",
    location: "chicago",
  },
  {
    username: "amy",
    password: "bubbles2",
    email: "amy@mail.com",
    location: "chicago",
  },
];

const seedParent = () => Parent.bulkCreate(parentData);

module.exports = seedParent;
