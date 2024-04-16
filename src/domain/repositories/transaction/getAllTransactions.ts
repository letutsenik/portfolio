import { db } from '@database/db';
import * as schema from '@database/schema';
import { TransactionDb } from '@database/types';

export const getAllTransactions = async (): Promise<TransactionDb[]> => {
	const transactions = await db.select().from(schema.transactions);

	return transactions;
};
