import fs from 'fs/promises';
import path from 'node:path';
import { Transaction } from '../../entities';

const TRANSACTIONS_FILE = path.join('./tmp/database', 'transactions.json');

// Function to read transactions from the JSON file
export const readTransactionsFromFile = async (): Promise<Transaction[]> => {
	try {
		const data = await fs.readFile(TRANSACTIONS_FILE, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		return [];
	}
};

export const writeTransactionsToFile = async (
	transactions: Transaction[],
): Promise<void> => {
	await fs.writeFile(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2));
};
