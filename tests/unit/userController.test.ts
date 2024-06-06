// tests/unit/userController.test.ts
import { User } from "../../src/entities/user";
import { getUsers, findUserById } from "../../src/controllers/userController";
import { clearTable, setupDB } from "../../src/infrastructure/db";

describe("User Controller", () => {
    beforeAll(async () => {
        await clearTable();
        await setupDB();
    });

    afterAll(async () => {
        await clearTable();
    });

    it("should return a list of users", async () => {
        const users: User[] = await getUsers();
        expect(users).toEqual([
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Doe", email: "jane@example.com" },
        ]);
    });

    it("Find user by ID", async () => {
        const id = 1;
        const user: User|undefined = await findUserById(id);
        expect(user?.email).toEqual("john@example.com");
    });
});
