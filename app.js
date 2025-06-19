const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
require('./routes/drone.routes')(app);
require('./routes/mission.routes')(app);
require('./routes/telemetry.routes')(app);

module.exports = app;
