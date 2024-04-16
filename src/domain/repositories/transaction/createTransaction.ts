import { db } from '@database/db';
import * as schema from '@database/schema';
import { TransactionDb } from '@database/types';

export const createTransaction = async (
	transaction: TransactionDb,
): Promise<TransactionDb> => {
	const response = await db
		.insert(schema.transactions)
		.values(transaction)
		.returning();

	return response[0];
};
