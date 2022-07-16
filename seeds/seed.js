const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postSeed) {
    await Post.create({
      ...post,
    });
  }

  process.exit(0);
};

seedDatabase();
