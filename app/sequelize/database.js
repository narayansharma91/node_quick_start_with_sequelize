module.exports = {
  development: {
    username: 'postgres',
    password: 'ucreate',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'ucreate',
    database: 'database_testing',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'postgres',
  },
};
