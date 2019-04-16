const faker = require('faker'); // eslint-disable-line import/no-extraneous-dependencies

const userList = (total, userTypeId = 1) => {
  const users = [];
  let i;
  for (i = 0; i <= total; i += 1) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      userTypeId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return users;
};

const singleFakeUser = (userTypeId = 2) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  userTypeId,
  createdAt: new Date(),
  updatedAt: new Date(),
});
module.exports = {
  userList,
  singleFakeUser,
};
