module.exports = (app) => {
  const clinics = require("../controllers/clinics.controller.js");
  const patients = require("../controllers/patients.controller.js");
  const router = require("express").Router();
  router.get("/clinics/all", clinics.fetchAll);
  router.get("/patients/:clinic_id", patients.fetchAllByClinic);
  app.use("/api/", router);
};
