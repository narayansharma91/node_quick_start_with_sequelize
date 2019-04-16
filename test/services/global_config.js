const { before, after } = require('mocha');
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { exec } = require('child_process');
const { registerAllRepos } = require('./../../app/repo/index');
const { registerAllServices } = require('./../../app/services/index');
let { models } = require('./../../app/sequelize/models/index');
const { registerAutoLoad } = require('./../../app/util/autoload');

process.env.NODE_ENV = 'test';
models = models();
before(async (done) => {
  const migrate = exec('sequelize db:migrate');
  migrate.stdout.pipe(process.stdout);
  migrate.stderr.pipe(process.stderr);
  done();
});
after((done) => {
  models.sequelize.sync({ force: true });
  setTimeout(() => {
    models.sequelize.close();
  }, 5000);
  done();
});

const startApplication = async () => {
  const app = express();
  app.use(urlencoded({ extended: false }));
  app.use(json());
  const repos = await registerAllRepos({ models });
  const services = {
    ...(await registerAllServices({ repos })),
    registerAutoLoad: await registerAutoLoad(),
  };
  return services;
};

module.exports = {
  services: new Promise((resolve) => {
    resolve(startApplication());
  }),
  models,
};
