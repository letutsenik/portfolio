import { readTransactionsFromFile, writeTransactionsToFile } from './_utils';
import { getErrorMessage } from '../../utils';
import { RepositoryError } from '../types';

export const deleteTransaction = async (
	transactionId: string,
): Promise<boolean | RepositoryError> => {
	try {
		const existingTransactions = await readTransactionsFromFile();

		const index = existingTransactions.findIndex(
			transaction => transaction.id === transactionId,
		);

		if (index !== -1) {
			existingTransactions.splice(index, 1);
		}
		const updatedTransactions = [...existingTransactions];
		await writeTransactionsToFile(updatedTransactions);

		return true;
	} catch (err: unknown) {
		return {
			message: getErrorMessage(err),
		};
	}
};
