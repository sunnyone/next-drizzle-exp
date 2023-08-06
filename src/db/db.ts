// db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import {event} from "./schema/event";

const pool = new Pool({
    host: '127.0.0.1',
    port: 5432,
    user: 'drizzleexp',
    password: 'drizzleexp',
    database: 'drizzleexp',
});

export const db = drizzle(pool);
