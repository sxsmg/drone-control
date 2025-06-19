const express = require('express');
const app = require('./app');
const http = require('http').createServer(app);

const { sequelize } = require('./models/postgres');
const connectMongo = require('./config/db.mongo');
const { setupWebSocket } = require('./websocket/telemetry.ws');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    await connectMongo();

    setupWebSocket(http); // <- Set up WebSocket on the HTTP server

    http.listen(PORT, () => {
      console.log(`HTTP & WebSocket server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Startup error:', err);
  }
})();
