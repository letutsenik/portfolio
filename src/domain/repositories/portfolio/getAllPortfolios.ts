import { db } from '@database/db';
import * as schema from '@database/schema';
import { PortfolioDb } from '@database/types';

export const getAllPortfolios = async (): Promise<PortfolioDb[]> => {
	const portfolios = await db.select().from(schema.portfolios);

	return portfolios;
};
