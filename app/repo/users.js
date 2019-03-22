const userRepo = ({ models: { User, UserType } }) => {
  const getUsers = () => User.findAll({
    attributes: ['firstName', 'lastName', 'email'],
    include: [
      {
        model: UserType,
        attributes: ['name'],
      },
    ],
  });
  const getUserDetail = id => User.findOne({
    where: { id },
    include: [
      {
        model: UserType,
        attributes: ['name'],
      },
    ],
  });
  const createUser = data => User.create(data);
  return {
    getUsers,
    getUserDetail,
    createUser,
  };
};
module.exports = {
  userRepo,
};
