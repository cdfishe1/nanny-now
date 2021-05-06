//create seeds for the models of the app

const seedParent = require("./parent-seed");
const seedNanny = require("./nanny-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedParent();
  console.log("\n----- PARENTS SEEDED -----\n");

  await seedNanny();
  console.log("\n----- NANNY SEEDED -----\n");

  process.exit(0);
};

seedAll();
