import { db } from '@database/db';
import * as schema from '@database/schema';
import { PortfolioDb } from '@database/types';
import { eq } from 'drizzle-orm';

export const updatePortfolio = async (
	portfolioId: string,
	portfolio: Partial<PortfolioDb>,
): Promise<{ portfolioId: string }[]> => {
	const updatedPortfolioId: { portfolioId: string }[] = await db
		.update(schema.portfolios)
		.set(portfolio)
		.where(eq(schema.portfolios.id, portfolioId))
		.returning({ portfolioId: schema.portfolios.id });

	return updatedPortfolioId;
};
