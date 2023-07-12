import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "./interfaces";

export const db = createKysely<Database>();