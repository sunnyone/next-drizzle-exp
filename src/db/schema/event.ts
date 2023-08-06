import {pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";

export const event = pgTable('event', {
    id: serial('id').primaryKey(),
    title: text('title'),
    // TODO: tztzrange
    startTime: timestamp('start_time', { withTimezone: true }),
    endTime: timestamp('end_time', { withTimezone: true }),
});
