const express = require('express');
const { port } = require('./app/config');
const { registerAllRepos } = require('./app/repo/index');
const { registerAllServices } = require('./app/services/index');
const { bootstrapApplication } = require('./app/app');
const { models } = require('./app/sequelize/models/index');
const { registerAutoLoad } = require('./app/util/autoload');

const app = express();
const repos = registerAllRepos({ models: models() });
const services = {
  ...registerAllServices({ repos }),
  registerAutoLoad: registerAutoLoad(),
};
bootstrapApplication({ services, app });
app.listen(port);
