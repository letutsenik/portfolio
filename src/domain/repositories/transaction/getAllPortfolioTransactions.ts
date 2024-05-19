import { db } from '@database/db';
import * as schema from '@database/schema';
import { TransactionDb } from '@database/types';
import { eq } from 'drizzle-orm';

export async function getAllPortfolioTransactions(
	portfolioId: string,
): Promise<TransactionDb[]> {
	const transactions = await db
		.select()
		.from(schema.transactions)
		.where(eq(schema.transactions.portfolioId, portfolioId));

	return transactions;
}
