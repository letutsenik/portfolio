import { portfolios, users } from './schema';

export type UserDb = typeof users.$inferInsert;
export type PortfolioDb = typeof portfolios.$inferInsert;
