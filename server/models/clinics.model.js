const csvParse = require("../helpers/csvParse");

const Clinic = function (clinic) {
  this.title = clinic.title;
  this.description = clinic.description;
  this.published = clinic.published;
};

const clinics = () => csvParse("clinics.csv");

Clinic.getAll = (result) => clinics().then((res) => result(null, res));

module.exports = Clinic;
