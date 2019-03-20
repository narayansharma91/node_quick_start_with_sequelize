const userService = ({
  repos: {
    userRepo: { getUsers, getUserDetail },
  },
}) => {
  const getUserService = () => getUsers();
  const getUserDetailService = id => getUserDetail(id);
  return { getUserService, getUserDetailService };
};
module.exports = { userService };
