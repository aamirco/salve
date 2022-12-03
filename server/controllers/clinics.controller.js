const Clinic = require("../models/clinics.model.js");

exports.fetchAll = (req, res) => {
  Clinic.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Server error",
      });
    else {
      return res.json(data);
    }
  });
};
