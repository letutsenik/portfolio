import crypto from 'node:crypto';
import { Transaction } from '../../entities/Transaction';
import { readTransactionsFromFile, writeTransactionsToFile } from './_utils';

type CreateTransactionOptions = {
	type: Transaction['type'];
	quantity: number;
	pricePerCoin: number;
	timestamp: Date;
	coinId: string;
	assetId: string;
	portfolioId: string;
};

export const createTransaction = async ({
	type,
	quantity,
	pricePerCoin,
	coinId,
	assetId,
	portfolioId,
}: CreateTransactionOptions): Promise<Transaction> => {
	const id = crypto.randomUUID();
	const timestamp = new Date().toISOString();

	const transaction: Transaction = {
		id,
		type,
		quantity,
		pricePerCoin,
		timestamp,
		coinId,
		assetId,
		portfolioId,
	};

	const existingTransactions = await readTransactionsFromFile();
	const updatedTransactions = [...existingTransactions, transaction];
	await writeTransactionsToFile(updatedTransactions);

	return transaction;
};
