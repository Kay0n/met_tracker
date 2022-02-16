// Import
const { Sequelize } = require('sequelize');

// Initialise
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	dialect: 'mysql',
    logging: null,

	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT ?? '3306')

});


// Export
export default sequelize;


