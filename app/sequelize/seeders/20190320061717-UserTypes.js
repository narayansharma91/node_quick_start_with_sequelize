module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert("UserTypes", [
      {
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    queryInterface.bulkDelete("UserTypes", null, {})
};
