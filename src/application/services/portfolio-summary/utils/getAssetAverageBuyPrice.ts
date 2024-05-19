import { Transaction } from 'src/domain';

export function getAssetAverageBuyPrice(transactions: Transaction[]): number {
	return +(
		transactions.reduce(
			(acc, transaction) =>
				transaction.type === 'BUY' ? acc + transaction.pricePerCoin : acc,
			0,
		) / transactions.length
	).toFixed(4);
}
