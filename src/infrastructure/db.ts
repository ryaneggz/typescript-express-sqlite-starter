import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export const connect = async (): Promise<
    Database<sqlite3.Database, sqlite3.Statement>
> => {
    const db = await open({
        filename: "./users.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )
  `);

    return db;
};

export const setupDB = async () => {
    const db = await connect();
    await db.run(
        `INSERT INTO users (name, email) VALUES (?, ?), (?, ?)`,
        "John Doe",
        "john@example.com",
        "Jane Doe",
        "jane@example.com"
    );
};

export const clearTable = async () => {
    const db = await connect();
    await db.run(
        "DROP TABLE IF EXISTS users"
    );
};
