const { Parent } = require("../models");

const parentData = [
  {
    username: "john",
    password: "bubbles",
    location: "chicago",
  },
  {
    username: "kristina",
    password: "bubbles1",
    location: "chicago",
  },
  {
    username: "amy",
    password: "bubbles2",
    location: "chicago",
  },
];

const seedParent = () => Parent.bulkCreate(parentData);

module.exports = seedParent;
