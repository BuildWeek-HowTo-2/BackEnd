const supertest = require('supertest');
const server = require("./api/server.js");
const db = require("./data/dbConfig.js");

beforeAll(async () => {
	return (
		await db.migrate.rollback(), await db.migrate.latest(), await db.seed.run()
	);
});
afterAll(async () => {
	return await db.migrate.rollback();
});

test("instructorsRegister", async () =>
{
    const res = await supertest(server)
        .post("/api/instructors/register")
        .send({"username": "testInstructor1", "password": "testPass2"});
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
	expect(res.body.username).toBe("testInstructor1");
});

test("instructorsLogin", async () =>
{
    const res = await supertest(server)
        .post("/api/instructors/login")
        .send({"username": "testInstructor1", "password": "testPass2"});
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
})

test("usersRegister", async () =>
{
    const res = await supertest(server)
        .post("/api/users/register")
        .send({"username": "testUser1", "password": "testPass2"});
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
	expect(res.body.username).toBe("testUser1");
});

test("usersLogin", async () =>
{
    const res = await supertest(server)
        .post("/api/users/login")
        .send({"username": "testUser1", "password": "testPass2"});
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
});

test("tutorialPost", async () =>
{
    const res = await supertest(server)
        .post("/api/tutorials")
        .send({"title": "Test tutorial",
            "summary": "Very big summary.",
            "instructor_id": 3
          })
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
});