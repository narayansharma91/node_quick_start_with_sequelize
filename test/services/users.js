const {
  describe, it, beforeEach, before,
} = require('mocha');
const { services, models } = require('./global_config');
const userTypes = require('./../../app/factories/user_types');
const { singleFakeUser } = require('./../../app/factories/fake_users');

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
    await allModels.UserType.bulkCreate(userTypes);
    await userService.createUserService(singleFakeUser);
  });
});
