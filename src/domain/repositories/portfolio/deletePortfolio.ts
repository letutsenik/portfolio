import { db } from '@database/db';
import * as schema from '@database/schema';
import { eq } from 'drizzle-orm';

export const deletePortfolio = async (
	portfolioId: string,
): Promise<{ id: string }[]> => {
	const deletedPortfolioId: { id: string }[] = await db
		.delete(schema.portfolios)
		.where(eq(schema.portfolios.id, portfolioId))
		.returning({ id: schema.portfolios.id });

	return deletedPortfolioId;
};
