'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    name: DataTypes.STRING
  }, {});
  UserType.associate = function(models) {
    UserType.hasOne(models.User,  {foreignKey: 'userTypeId'}) 
    // associations can be defined here
  };
  return UserType;
};