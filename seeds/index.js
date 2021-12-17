const seedGames = require('./gameSeeds');


const sequelize = require('../config/config.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');

  process.exit(0);
};

seedAll();
