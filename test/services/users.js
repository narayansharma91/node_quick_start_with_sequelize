const { describe, it, beforeEach } = require('mocha');
const { services } = require('./global_config');

let allServices = '';
let userService = '';
describe('User services', async () => {
  beforeEach(async () => {
    allServices = await services;
    /*  eslint-disable-next-line prefer-destructuring */
    userService = allServices.userService;
  });
  it('userService#createUserService()', async () => {
    userService.createUserService({
      firstName: 'Narayan1',
      lastName: 'Sharma',
      email: 'demo@gmail.com',
      userTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
