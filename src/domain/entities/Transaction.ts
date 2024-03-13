export interface Transaction {
	id: string;
	type: 'BUY' | 'SELL';
	quantity: number;
	pricePerCoin: number;
	timestamp: Date | string;
	coinId: string;
	assetId: string;
	portfolioId: string;
}
