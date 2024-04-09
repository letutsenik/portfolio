import { users } from './schema';

export type UserDb = typeof users.$inferInsert;
