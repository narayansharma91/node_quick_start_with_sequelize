const admin = require("./../../factories/admin");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Users", [admin]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {})
};
