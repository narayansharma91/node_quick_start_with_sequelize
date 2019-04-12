const {
  describe, it, beforeEach, before,
} = require('mocha');
const { services, models } = require('./global_config');

let allServices = '';
let userService = '';
let allModels;
describe('User services', async () => {
  before(async () => {});
  beforeEach(async () => {
    allServices = await services;
    /*  eslint-disable-next-line prefer-destructuring */
    userService = allServices.userService;
    allModels = await models;
  });
  it('userService#createUserService()', async () => {
    await allModels.UserType.create(
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    );
    await userService.createUserService({
      firstName: 'Narayan1',
      lastName: 'Sharma',
      email: 'demo@gmail.com',
      userTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
