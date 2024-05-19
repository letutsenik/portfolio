import { TransactionDb } from '@database/types';
import { TransactionRepository } from 'src/domain/repositories';

export const createTransaction = async () => {
	const transactionInput: TransactionDb = {
		type: 'BUY',
		quantity: 0.08,
		price: '12500.5',
		userId: 'c27baee7-e6d2-48a6-8ae9-a5b9ed1a6171',
		portfolioId: 'eebc558e-5ef4-4cdb-a668-bca98455ece1',
		assetId: 'BTC',
	};
	const newTransaction =
		await TransactionRepository.createTransaction(transactionInput);

	// eslint-disable-next-line no-console
	console.log('newTransaction: ', newTransaction);
};
