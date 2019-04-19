const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { describe, it, beforeEach } = require('mocha');
const userTypes = require('./../../app/factories/user_types');
const { services, models } = require('./global_config');
const { singleFakeUser } = require('./../../app/factories/fake_users');

const { assert, expect } = chai;
chai.use(chaiAsPromised);
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
  it('userService#getUserService()#notfoundExeption', async () => {
    await expect(userService.getUserDetailService(1001)).to.be.rejected;
  });
});
