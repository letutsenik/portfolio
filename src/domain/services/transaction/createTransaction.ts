import { TransactionDb } from '@database/types';
import { TransactionRepository } from 'src/domain/repositories';

export const createTransaction = async () => {
	const transactionInput: TransactionDb = {
		type: 'BUY',
		quantity: 1,
		price: '63025.5',
		userId: '623333a0-0d06-4877-938f-26dd39f9a855',
		portfolioId: '89fc7ed6-84f5-48a7-bf0a-a6fc586a6510',
	};
	const newTransaction =
		await TransactionRepository.createTransaction(transactionInput);

	// eslint-disable-next-line no-console
	console.log('newTransaction: ', newTransaction);
};
