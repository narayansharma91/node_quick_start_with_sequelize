const { userService } = require('./users');

const registerAllServices = ({ repos }) => ({
  userService: userService({ repos }),
});
module.exports = {
  registerAllServices,
};
