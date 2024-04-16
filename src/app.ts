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
	await TransactionService.createTransaction();
};

main();
