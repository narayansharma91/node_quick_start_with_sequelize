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
  return {
    getUsers,
    getUserDetail,
  };
};
module.exports = {
  userRepo,
};
