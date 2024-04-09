import { db } from '../../../interfaces/database/db';
import * as schema from '../../../interfaces/database/schema';
import { UserDb } from '../../../interfaces/database/types';

export const createUser = async (user: UserDb) => {
	const response = await db.insert(schema.users).values(user).returning();

	return response[0];
};
