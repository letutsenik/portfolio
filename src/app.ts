import { createTransaction } from './domain/repositories/transaction';

// eslint-disable-next-line no-console
console.log('Hello portfolio API');
createTransaction({
	type: 'BUY',
	quantity: 10,
	pricePerCoin: 52,
	timestamp: new Date(),
	coinId: '111',
	assetId: '111-asset',
	portfolioId: '111-portfolio',
});
