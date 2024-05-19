import { Transaction } from 'src/domain';
import { getAssetAverageBuyPrice } from './utils';

export type AssetSummary = {
	averageBuyPrice: number;
};

export function getAssetSummary(transactions: Transaction[]): AssetSummary {
	const averageBuyPrice = getAssetAverageBuyPrice(transactions);

	return {
		averageBuyPrice,
	};
}
