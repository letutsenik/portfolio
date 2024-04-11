import { db } from '@database/db';
import * as schema from '@database/schema';
import { eq } from 'drizzle-orm';

export const deleteUser = async (
	userId: string,
): Promise<{ email: string }[]> => {
	const deletedUserId: { email: string }[] = await db
		.delete(schema.users)
		.where(eq(schema.users.email, userId))
		.returning({ email: schema.users.email });

	return deletedUserId;
};
