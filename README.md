### Quick setup

* Download and install npm from offical website if you don't have already (https://nodejs.org/en/) 
* Clone this project using below command.
```
git clone https://github.com/narayansharma91/node_quick_start.git
```
* Goto your project directory by command line.
```
cd /path/of/clone directory
```
* Install dependency of project using given below command
```
npm install
``` 
* Once dependency downloaded, 

```
copy manually .env.example and rename with .env name
```
* Configure your configuration based on your requirements on .env file(eg. port, database name, environment etc)

* Install postgres/mysql database if you don't have already.

* Migrate database schema (existing) using below command.
```
npx sequelize db:migrate
```
* Seed database seed (Demo User) using below command.
```
npx sequelize db:seed:all
```
* Start project using below command.
```
nodemon index.js
```
### Directory/File Structure
- **index.js:** The index.js file is the entry point of the application where all the services, packages are registered to bootstrap your application.
- **app :** The app directory holds all application source code eg. services, repo etc.
  
  - **http :** The http directory contains two sub directory for store validation rules and register application routes.
    - **request :** The request directory containts all validation rules for every post request. You can create sub directory as per your requirements for readablility purpose. I'm using express-validator for defining validation rules. Please have a look official website for better understanding about express-validator.
    
    - **routes :** The routes directory contains all the application routes. You can create sub directory based on modules as already created one directory(users) inside routes.
   - **repo :** The repo directory holds all the files which is associated with sql query. For every model it should be one    seperate file inside repo directory where all sql query will goes to inside that file for that specific model.
   
  - **sequelize :** This directory contains multiple subdirectory which are associated with sequelize package. 
  
    - **models :** The models directory holds all the application models. Inside those files might have models relationship and model behavior based on requirements.  
    
    - **migrations :** This directory holds all the database schema. We are using sequelize migration for manage database schema.
    
    - **seeders :** This directory holds all the demo data which can be used for seed data to specific tables. 
    
    - **database.js :** This file contains database configurations based on your environments.
    
  - **services :** The services directory holds all the application services. All the business logic should include in service file. Service file only access repo files. Inside service file get result set from repo file and manupulate the result based on business logic. When user hit specific routes, That request goes to specific service to manupulate that request. Its same as controller in MVC design pattern.
  
  - **util :** The util directory holds helper files which can be reusable all over the application. 
  
 - **app.js :** The app.js file is responsible for register all the routes.
 
 - **config.js :** The config.js file is responsible for provide application level configuration based on environment. 

### Lets start adding some functionlity(eg. create category)
- Create model and migration file using below command. It will create one migration file and one model automatically. Documentation http://docs.sequelizejs.com/manual/migrations.html

```
npx sequelize model:generate --name Category --attributes name:string 
``` 
- Create repo file `category.js` inside app/repo directory. Write some scripts on that file.

```
const categoryRepo = ({ models: { Category } }) => {
  const createCategory = data => Category.create(data);
  return {
    createCategory,
  };
};
module.exports = {
  categoryRepo,
};

```
- Register this repo on `app/repo/index.js` file.
```
const { userRepo } = require('./users');
const { categoryRepo } = require('./category');
const registerAllRepos = ({ models }) => ({
  userRepo: userRepo({ models }),
  categoryRepo: categoryRepo({ models }),
});
module.exports = {
  registerAllRepos,
};
```
- Create service file `category.js` inside app/services directory.

```
const categoryService = ({
  repos: {
    categoryRepo: { createCategory },
  },
}) => {
  const createCategoryService = (data) => {
    return createCategory(data);
  };
  return { createCategoryService };
};
module.exports = { categoryService };

```
- Register your service inside `app/services/index.js` file.

```
const { userService } = require('./users');
const { categoryService } = require('./category');

const registerAllServices = ({ repos }) => ({
  userService: userService({ repos }),
  categoryService: categoryService({ repos }),
});
module.exports = {
  registerAllServices,
};

```

- Create routes `category.js` inside `app/http/routes` directory.
```
const { userCreateValidationRules } = require('./../request/users/create_user');

const registerUserRoutes = ({
  Router,
  services: {
    categoryService: { createCategoryService },
    registerAutoLoad: { apiResponse, validationResponse },
  },
}) => {
  const router = Router();
  router.post(
    '/',
    userCreateValidationRules(),
    validationResponse,
    apiResponse(async (req) => {
      const category = await createCategoryService(req.body);
      return {
        status: 200,
        data: category,
      };
    }),
  );
  return router;
};
module.exports = { registerCategoryRoutes };

```



