import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey().unique(),
	firstName: text('first_name'),
	lastName: text('last_name'),
	fullName: text('full_name'),
	phone: varchar('phone', { length: 256 }),
});
