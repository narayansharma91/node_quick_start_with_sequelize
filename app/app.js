const { Router } = require('express');
const { registerUserRoutes } = require('./../app/http/routes/users');

const bootstrapApplication = ({ services, app }) => {
  app.use('/users', registerUserRoutes({ Router, services }));
};
module.exports = { bootstrapApplication };
