import { sql } from "kysely";
import { db } from "./database";

export async function seed() {
    await db.schema
        .createTable("requests")
        .ifNotExists()
        .addColumn("id", "serial", (cb) => cb.primaryKey())
        .addColumn("activity", "varchar(255)", (cb) => cb.notNull())
        .addColumn("date", "varchar(255)", (cb) => cb.notNull())
        .addColumn("status", "varchar(255)")
        .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
            cb.defaultTo(sql`current_timestamp`)
        )
        .execute();
    console.log("Created \"requests\" table");
}