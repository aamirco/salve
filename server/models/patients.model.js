const csvParse = require("../helpers/csvParse");

const Patient = function (patient) {
  this.id = patient.id;
  this.clinic_id = patient.clinic_id;
  this.first_name = patient.first_name;
  this.last_name = patient.last_name;
  this.date_of_birth = patient.date_of_birth;
};
const patients = (clinic_id) => csvParse(`patients-${clinic_id}.csv`);
Patient.getAll = (clinic_id, result) => {
  patients(clinic_id).then((res) => result(null, res));
};

module.exports = Patient;
