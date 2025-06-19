const { Server } = require("socket.io");

let io;

function setupWebSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("subscribe", (droneId) => {
      console.log(`Subscribed to drone ${droneId}`);
      socket.join(`drone:${droneId}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
}

function broadcastTelemetry(droneId, data) {
  if (io) {
    io.to(`drone:${droneId}`).emit("telemetry", data);
  }
}

module.exports = { setupWebSocket, broadcastTelemetry };
