const userService = ({
  repos: {
    userRepo: { getUsers, getUserDetail, createUser },
  },
}) => {
  const getUserService = () => getUsers();
  const getUserDetailService = id => getUserDetail(id);
  const createUserService = (data) => {
    console.log(data);
    return createUser(data);
  };
  return { getUserService, getUserDetailService, createUserService };
};
module.exports = { userService };
