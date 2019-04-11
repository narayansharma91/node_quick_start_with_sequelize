const { before, after } = require('mocha');
const express = require('express');
const bodyParser = require('body-parser');
const { registerAllRepos } = require('./../../app/repo/index');
const { registerAllServices } = require('./../../app/services/index');
let { models } = require('./../../app/sequelize/models/index');
const { registerAutoLoad } = require('./../../app/util/autoload');

models = models();
before(() => {
  process.env.ENV = 'test';
});
after(() => {
  process.env.ENV = 'development';
});
const startApplication = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  const repos = await registerAllRepos({ models });
  const services = {
    ...(await registerAllServices({ repos })),
    registerAutoLoad: await registerAutoLoad(),
  };
  return services;
};

module.exports = {
  services: new Promise((resolve, reject) => {
    resolve(startApplication());
  }),
};
