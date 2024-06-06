// src/repositories/userRepository.ts
import { Database } from "sqlite";
import { User } from "../entities/user";
import { connect } from "../infrastructure/db";

export class UserRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    static async init(): Promise<UserRepository> {
        const db = await connect();
        return new UserRepository(db);
    }

    async getAllUsers(): Promise<User[]> {
        return this.db.all<User[]>("SELECT * FROM users");
    }

    async getUserById(id: number): Promise<User | undefined> {
        return this.db.get<User>("SELECT * FROM users WHERE id = ?", id);
    }

    async createUser(name: string, email: string): Promise<void> {
        await this.db.run(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            name,
            email
        );
    }

    async updateUser(id: number, name: string, email: string): Promise<void> {
        await this.db.run(
            "UPDATE users SET name = ?, email = ? WHERE id = ?",
            name,
            email,
            id
        );
    }

    async deleteUser(id: number): Promise<void> {
        await this.db.run("DELETE FROM users WHERE id = ?", id);
    }
}
