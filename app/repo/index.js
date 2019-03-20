const { userRepo } = require('./users');

const registerAllRepos = ({ models }) => ({
  userRepo: userRepo({ models }),
});
module.exports = {
  registerAllRepos,
};
