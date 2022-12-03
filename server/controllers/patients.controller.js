const Patient = require("../models/patients.model.js");

exports.fetchAllByClinic = (req, res) => {
  const clinicId = req.params.clinic_id;
  Patient.getAll(clinicId, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Server error",
      });
    else {
      return res.json(data);
    }
  });
};
