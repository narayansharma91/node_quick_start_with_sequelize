prettier="./node_modules/.bin/prettier"
eslint="./node_modules/.bin/eslint"
$prettier index.js --write
$eslint index.js --fix 
$prettier app/*.js --write 
$eslint app/*.js --fix 
$prettier app/http/request/**/*.js --write 
$eslint app/http/request/**/*.js --fix 
$prettier app/http/routes/**/*.js --write 
$eslint app/http/routes/**/*.js --fix 
$prettier app/sequelize/models/*.js --write 
$eslint app/sequelize/models/*.js --fix
$prettier app/sequelize/seeders/*.js --write
$eslint app/sequelize/seeders/*.js --fix
$prettier app/**/*.js --write 
$eslint app/**/*.js --fix
$prettier app/util/**/*.js --write 
$eslint app/util/**/*.js --fix

$prettier test/**/*.js --write
$eslint test/**/*.js --fix