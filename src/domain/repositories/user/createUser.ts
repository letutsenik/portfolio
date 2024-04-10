import { db } from '@database/db';
import * as schema from '@database/schema';
import { UserDb } from '@database/types';

export const createUser = async (user: UserDb): Promise<UserDb> => {
	const response = await db.insert(schema.users).values(user).returning();

	return response[0];
};
