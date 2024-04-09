import { db } from '../../../interfaces/database/db';
import * as schema from '../../../interfaces/database/schema';

export const getAllUsers = async () => {
	const users = await db.select().from(schema.users);

	return users;
};
