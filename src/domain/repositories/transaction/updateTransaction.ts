import { db } from '@database/db';
import * as schema from '@database/schema';
import { TransactionDb } from '@database/types';
import { eq } from 'drizzle-orm';

export const updateTransaction = async (
	transactionId: string,
	transaction: Partial<TransactionDb>,
): Promise<{ id: string }[]> => {
	const updatedTransactionId: { id: string }[] = await db
		.update(schema.transactions)
		.set(transaction)
		.where(eq(schema.transactions.id, transactionId))
		.returning({ id: schema.transactions.id });

	return updatedTransactionId;
};
