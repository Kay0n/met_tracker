// Import
const Cause = require('./cause');
const Records = require('./records');
const Patients = require('./patients');
const Management = require('./Management');
const Medications = require('/Medications')




// Define Associations
Records.hasMany(Cause, { foreignKey: { name: 'cause_id' } });
Cause.belongsTo(Records, { foreignKey: { name: 'cause_id' } });

Records.hasMany(Patients, { foreignKey: { name: 'patient_id' } });
Patients.belongsTo(Records, { foreignKey: { name: 'patient_id' } });

Records.belongsToMany(Management, { through: ManagementJunction }, { foreignKey: { name: 'management_id' } });
Management.belongsToMany(Records, { through: ManagementJunction }, { foreignKey: { name: 'management_id' } });

Records.belongsToMany(Medications, { through: MedicationJunction }, { foreignKey: { name: 'medication_id' } });
Medications.belongsToMany(Records, { through: MedicationJunction }, { foreignKey: { name: 'medication_id' } });


