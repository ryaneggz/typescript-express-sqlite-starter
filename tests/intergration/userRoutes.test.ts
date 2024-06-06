// tests/integration/userRoutes.test.ts

import request from "supertest";
import { app, server } from "../../src/main";
import { clearTable, setupDB } from "../../src/infrastructure/db";

describe("GET /users", () => {
    beforeAll(async () => {
        await clearTable();
        await setupDB();
    });

    afterAll(async () => {
        await clearTable();
        server.close();
    });

    it("should return a list of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual([
            {
                id: expect.any(Number),
                name: "John Doe",
                email: "john@example.com",
            },
            {
                id: expect.any(Number),
                name: "Jane Doe",
                email: "jane@example.com",
            },
        ]);
    });
});
