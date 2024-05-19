export interface Transaction {
	id: string;
	type: 'BUY' | 'SELL';
	quantity: number;
	pricePerCoin: number;
	date: Date | string;
	userId: string;
	portfolioId: string;
	assetId: string;
}
