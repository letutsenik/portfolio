import { db } from '@database/db';
import * as schema from '@database/schema';
import { UserDb } from '@database/types';
import { eq } from 'drizzle-orm';

export const updateUser = async (
	userId: string,
	user: Partial<UserDb>,
): Promise<{ email: string }[]> => {
	const updatedUserId: { email: string }[] = await db
		.update(schema.users)
		.set(user)
		.where(eq(schema.users.email, userId))
		.returning({ email: schema.users.email });

	return updatedUserId;
};
