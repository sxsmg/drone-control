const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/postgres");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("POST /missions", () => {
  it("should create a mission", async () => {
    await request(app).post("/drones").send({ name: "Test Drone", model: "X1" });

    const res = await request(app).post("/missions").send({
      droneId: 1,
      start_time: "2025-06-21T10:00:00Z",
      end_time: "2025-06-21T11:00:00Z",
      location: "Zone A"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.location).toBe("Zone A");
  });

  it("should reject overlapping mission", async () => {
    const res = await request(app).post("/missions").send({
      droneId: 1,
      start_time: "2025-06-21T10:30:00Z",
      end_time: "2025-06-21T11:30:00Z",
      location: "Conflict Zone"
    });

    expect(res.statusCode).toBe(409);
    expect(res.body.error).toMatch(/conflict/i);
  });
});
