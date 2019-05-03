### Included features
- Well structure of the file for a large project.
- Configured database connection.
- Sequelize : ORM for node.js
- Unit Test
- Validation
- Linter (eslint, prettier) for code guideline and increase the readability of the code.

<hr />

### Application File/Directory Structure
<img src="https://github.com/narayansharma91/repo_images/blob/master/node_quick_start_with_sequelize/node_with_sequelize_directory_structure.jpg" width="100%" height="350" />

<hr />

### Application layer Architecture
![alt text](https://github.com/narayansharma91/repo_images/blob/master/node_quick_start_with_sequelize/node_quick_start_with_sequelize_application_layer.jpg)

<hr />

### Quick setup

* Download and install npm from offical website if you don't have already (https://nodejs.org/en/) 
* Clone this project using below command.
```
git clone https://github.com/narayansharma91/node_quick_start_with_sequelize.git
```
* Goto your project directory by command line.
```
cd node_quick_start_with_sequelize
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
* Start project using below command.
```
nodemon index.js
```

<hr />

 ### Official website/url for different packages.
 - Validation (express-validator) : https://express-validator.github.io/docs/
 - ORM (sequelize) : http://docs.sequelizejs.com/


```



