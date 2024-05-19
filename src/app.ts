import {
	// UserService,
	// AssetService,
	// PortfolioService,
	TransactionService,
} from './domain/services';

// eslint-disable-next-line no-console
console.log('Hello portfolio API');

const main = async () => {
	// await UserService.createUser();
	// await PortfolioService.createPortfolio();
	// await AssetService.createAsset();
	// await UserService.getAllUsers();
	// await TransactionService.createTransaction();
	const transactions = await TransactionService.getAllPortfolioTransactions(
		'89fc7ed6-84f5-48a7-bf0a-a6fc586a6510',
	);

	// eslint-disable-next-line no-console
	console.log('transactions: ', transactions, transactions.length);
};

main();
