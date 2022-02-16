// Import
const { DataTypes } = require('sequelize');

// Lib
const sequelize = require('../lib/sequelize');

// Define Model
const Records = sequelize.define('records', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		unique: true,
		autoIncrement: true
	},
	start_date: {
		type: DataTypes.DATE,
		allowNull: false
    },
    end_date: {
		type: DataTypes.DATE,
		allowNull: false
    },
	item_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	},

    registrar_name: {

    },
    icu_access_name: {

    },
    met_consultant: {

    },
    consultant_attend_bool: {

    },
    consultant_contact_time: {

    } ,
    patient_id: {

    },
   


    gcs: {

    },
    rr: {

    },
    hr: {

    },
    rythm: {

    },
    o2_flow: {

    },
    address: {

    },
    bp: {

    },
    temp: {

    },
    cause: {

    },
    cause_comment: {

    },



    drugs: {

    },
    management: {

    },








});

// Export
module.exports = BookingItem;
