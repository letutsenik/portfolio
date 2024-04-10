import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: varchar('email', { length: 256 }).notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name'),
	fullName: text('full_name'),
	phone: varchar('phone', { length: 256 }),
});
