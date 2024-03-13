import crypto from 'node:crypto';
import { Transaction } from '../../entities/Transaction';
import { readTransactionsFromFile, writeTransactionsToFile } from './_utils';
import { RepositoryError } from '../types';
import { getErrorMessage } from '../../utils';

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
}: CreateTransactionOptions): Promise<Transaction | RepositoryError> => {
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

	try {
		const existingTransactions = await readTransactionsFromFile();
		const updatedTransactions = [...existingTransactions, transaction];
		await writeTransactionsToFile(updatedTransactions);

		return transaction;
	} catch (err: unknown) {
		return {
			message: getErrorMessage(err),
		};
	}
};
