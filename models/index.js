//create associations for the models
//import models
const Nanny = require("./Nanny");
const Parent = require("./Parent");

Nanny.hasMany(Parent, {
  foreignKey: "nanny_id",
});

Parent.belongsTo(Nanny, {
  foreignKey: "nanny_id",
});

module.exports = {
  Nanny,
  Parent,
};
