const { describe, it, beforeEach } = require('mocha');
const { assert } = require('chai');

const { services, models } = require('./global_config');
const userTypes = require('./../../app/factories/user_types');
const { singleFakeUser } = require('./../../app/factories/fake_users');

let allServices = '';
let userService = '';
let allModels;
let userId;
describe('User services', async () => {
  beforeEach(async () => {
    allServices = await services;
    /*  eslint-disable-next-line prefer-destructuring */
    userService = allServices.userService;
    allModels = await models;
  });
  it('userService#createUserService()', async () => {
    await allModels.UserType.bulkCreate(userTypes);
    const fakeUser = singleFakeUser();
    const userInfo = await userService.createUserService(fakeUser);
    userId = userInfo.id;
    assert.isNotNull(userInfo, 'Unable to create user.');
  });

  it('userService#getUserService()', async () => {
    const users = await userService.getUserService();
    assert.isNotNull(users, 'Unable to load users.');
  });

  it('userService#getUserService()', async () => {
    const user = await userService.getUserDetailService(userId);
    assert.isNotNull(user, 'Unable to load user details.');
  });
});
