const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./app/config');
const { registerAllRepos } = require('./app/repo/index');
const { registerAllServices } = require('./app/services/index');
const { bootstrapApplication } = require('./app/app');
const { models } = require('./app/sequelize/models/index');
const { registerAutoLoad } = require('./app/util/autoload');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const repos = registerAllRepos({ models: models() });
const services = {
  ...registerAllServices({ repos }),
  registerAutoLoad: registerAutoLoad(),
};
bootstrapApplication({ services, app });
/*  eslint-disable-next-line no-console */
console.log(`application start at ${port}`);
app.listen(port);
