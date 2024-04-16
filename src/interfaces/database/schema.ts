import { sql } from 'drizzle-orm';
import {
	pgTable,
	text,
	uuid,
	varchar,
	doublePrecision,
	decimal,
	timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id')
		.default(sql`gen_random_uuid()`)
		.primaryKey(),
	email: varchar('email', { length: 256 }).notNull().unique(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name'),
	fullName: text('full_name'),
	phone: varchar('phone', { length: 256 }),
});

export const portfolios = pgTable('portfolios', {
	id: uuid('id')
		.default(sql`gen_random_uuid()`)
		.primaryKey(),
	name: text('name').notNull(),
	userId: uuid('user_id')
		.references(() => users.id)
		.notNull(),
});

export const assets = pgTable('assets', {
	id: uuid('id')
		.default(sql`gen_random_uuid()`)
		.primaryKey(),
	name: text('name').notNull(),
	symbol: varchar('symbol', { length: 8 }).notNull().unique(),
});

export const transactions = pgTable('transactions', {
	id: uuid('id')
		.default(sql`gen_random_uuid()`)
		.primaryKey(),
	type: text('transaction_type', { enum: ['BUY', 'SELL'] }).notNull(),
	quantity: doublePrecision('quantity').default(0.0).notNull(),
	price: decimal('price', { precision: 10, scale: 2 }).notNull(),
	date: timestamp('date').defaultNow(),
	userId: uuid('user_id')
		.references(() => users.id)
		.notNull(),
	portfolioId: uuid('portfolio_id')
		.references(() => portfolios.id)
		.notNull(),
});
