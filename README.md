
---

## 📘 `README.md`
* Project overview
* Tech stack
* Setup instructions
* API endpoints (with examples)
* Validation behavior
* WebSocket telemetry
* Testing

````markdown
# Drone Control Backend

This backend system manages drones, their mission schedules, and real-time telemetry data.

## 🚀 Tech Stack

- **Node.js + Express** – Web framework
- **PostgreSQL (via Sequelize)** – Drones and Missions
- **MongoDB (via Mongoose)** – Telemetry logs
- **Socket.IO** – Real-time telemetry broadcasting
- **express-validator** – Input validation
- **Jest + Supertest** – Testing framework

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/sxsmg/drone-control.git
cd drone-control
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure `.env`

```env
PORT=3000

# PostgreSQL
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=postgres
PG_DATABASE=drone_control

# MongoDB
MONGO_URI=mongodb://localhost:27017/telemetrydb
```

### 4. Start the Server

```bash
npm start
```

You should see:

```
MongoDB connected
HTTP & WebSocket server running on port 3000
```

---

## 📡 API Endpoints

### 🔹 Drones

#### `POST /drones`

Register a drone

```json
{ "name": "Drone A", "model": "DJI Mavic", "status": "idle" }
```

#### `GET /drones`

List all drones

#### `GET /drones/:id`

Get drone by ID

---

### 🔹 Missions

#### `POST /missions`

Schedule a mission

```json
{
  "droneId": 1,
  "start_time": "2025-06-21T10:00:00Z",
  "end_time": "2025-06-21T11:00:00Z",
  "location": "Zone A"
}
```

⛔ Responds with `409 Conflict` if mission overlaps.

#### `GET /missions`

List all missions

#### `GET /drones/:id/missions`

List missions for a specific drone

---

### 🔹 Telemetry

#### `POST /telemetry`

Log telemetry data

```json
{
  "droneId": "1",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "battery": 87,
  "timestamp": "2025-06-21T12:00:00Z"
}
```

⏱️ Timestamp is optional (defaults to current time)

---

## ✅ Input Validation

All APIs validate input using `express-validator`. Examples:

* `POST /drones` requires:

  * `name` (non-empty)
  * `status` must be one of `idle`, `active`, `maintenance`

* `POST /missions`:

  * `droneId` must be integer
  * `start_time` and `end_time` must be valid ISO dates

* `POST /telemetry`:

  * `latitude` between `-90` and `90`
  * `battery` between `0` and `100`

If invalid, responds with:

```json
{
  "errors": [
    { "msg": "Invalid latitude", "param": "latitude" }
  ]
}
```

---

## 🔴 Real-Time WebSocket Telemetry

Clients can subscribe to drone telemetry in real time.

### WebSocket URL:

```
ws://localhost:3000
```

### Example Usage (HTML client):

```js
const socket = io("http://localhost:3000");
socket.emit("subscribe", "1");
socket.on("telemetry", (data) => console.log("Live:", data));
```

---

## 🧪 Testing

### Run tests with Jest

```bash
npm test
```

Includes:

* Mission creation
* Conflict validation

---

## 📂 Folder Structure

```
.
├── controllers/
├── routes/
├── models/
│   ├── mongo/         # Telemetry
│   └── postgres/      # Drone & Mission
├── services/
├── validators/
├── middlewares/
├── websocket/
└── config/
```

---