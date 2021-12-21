const seedGames = require('./gameSeeds');


const sequelize = require('../config/config.js');
const seedReviews = require('./reviewSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');
  await seedReviews();
  process.exit(0);
};

seedAll();
