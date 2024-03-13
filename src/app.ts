import {
	createTransaction,
	// deleteTransaction,
} from './domain/repositories/transaction';

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

// deleteTransaction('59da2abe-ee7e-4275-ad2b-b0a6b9a6881d');
