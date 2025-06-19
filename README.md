# Drone Planner Backend

This is a backend system to manage drones, missions, and telemetry data using:
- PostgreSQL (Drones + Missions)
- MongoDB (Telemetry)
- Express.js (Node.js)

## Getting Started

1. Clone the repo
2. Install dependencies
3. Setup `.env` with DB configs
4. Run: `node server.js`

## API Endpoints

- `POST /drones`
- `POST /missions`
- `POST /telemetry`
