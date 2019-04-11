module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Users", [
      {
        firstName: "Narayan",
        lastName: "Sharma",
        email: "demo@gmail.com",
        userTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {})
};
