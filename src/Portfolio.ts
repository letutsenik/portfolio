export class Portfolio implements IPortfolio {
	description: string;

	createdAt: string;

	constructor(description: string) {
		this.description = description;
		this.createdAt = new Date().toISOString();
	}
}
