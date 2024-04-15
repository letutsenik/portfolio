import { db } from '@database/db';
import * as schema from '@database/schema';
import { PortfolioDb } from '@database/types';

export const createPortfolio = async (
	portfolio: PortfolioDb,
): Promise<PortfolioDb> => {
	const response = await db
		.insert(schema.portfolios)
		.values(portfolio)
		.returning();

	return response[0];
};
