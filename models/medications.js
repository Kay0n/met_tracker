// Import
const { DataTypes } = require('sequelize');

// Lib
const sequelize = require('../lib/sequelize');

// Define Model
const Medications = sequelize.define('medications', {
	medication_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		unique: true,
		autoIncrement: true
	},
	medication_name: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

// Export
module.exports = Medications;
