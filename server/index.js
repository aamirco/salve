const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
require("./routes/routes.js")(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
