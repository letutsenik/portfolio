import { db } from '@database/db';
import * as schema from '@database/schema';
import { UserDb } from '@database/types';

export const getAllUsers = async (): Promise<UserDb[]> => {
	const users = await db.select().from(schema.users);

	return users;
};
