### Quick setup

* Download and install npm from offical website if you don't have already (https://nodejs.org/en/) 
* Clone this project using below command.
```
git clone https://github.com/narayansharma91/node_best_practice.git
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
* Install postgres database if you don't have already.
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
* app
* repo
* routes
* sequelize
* services
* util
* app.js
* config.js

### Packages

