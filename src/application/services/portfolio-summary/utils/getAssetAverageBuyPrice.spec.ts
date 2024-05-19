import { Transaction } from 'src/domain';
import { getAssetAverageBuyPrice } from './getAssetAverageBuyPrice';

describe('getAssetAverageBuyPrice', () => {
	it('calculates the average buy price of transactions', () => {
		const transactions: Transaction[] = [
			{
				id: '111',
				type: 'BUY',
				pricePerCoin: 25010.55,
				assetId: 'BTC',
				date: '2024-01-0',
				portfolioId: 'portfolio-main',
				quantity: 1,
				userId: 'user-111',
			},
			{
				id: '111',
				type: 'BUY',
				pricePerCoin: 23010.88,
				assetId: 'BTC',
				date: '2024-01-02',
				portfolioId: 'portfolio-main',
				quantity: 1,
				userId: 'user-111',
			},
			{
				id: '111',
				type: 'BUY',
				pricePerCoin: 33010.11,
				assetId: 'BTC',
				date: '2024-01-03',
				portfolioId: 'portfolio-main',
				quantity: 1,
				userId: 'user-111',
			},
		];

		const averagePrice = getAssetAverageBuyPrice(transactions);

		expect(averagePrice).toEqual(27010.5133);
	});
});
