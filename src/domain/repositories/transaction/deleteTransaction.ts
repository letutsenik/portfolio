import { db } from '@database/db';
import * as schema from '@database/schema';
import { eq } from 'drizzle-orm';

export const deleteTransaction = async (
	transactionId: string,
): Promise<{ idl: string }[]> => {
	const deletedTransactionId: { idl: string }[] = await db
		.delete(schema.transactions)
		.where(eq(schema.transactions.id, transactionId))
		.returning({ idl: schema.transactions.id });

	return deletedTransactionId;
};
