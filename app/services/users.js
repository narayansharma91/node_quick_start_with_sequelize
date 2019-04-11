const userService = ({
  repos: {
    userRepo: { getUsers, getUserDetail, createUser },
  },
}) => {
  const getUserService = () => getUsers();
  const getUserDetailService = id => getUserDetail(id);
  const createUserService = data => createUser(data);
  return {
    getUserService,
    getUserDetailService,
    createUserService,
  };
};
module.exports = { userService };
