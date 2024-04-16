import { portfolios, users, assets, transactions } from './schema';

export type UserDb = typeof users.$inferInsert;
export type PortfolioDb = typeof portfolios.$inferInsert;
export type AssetDb = typeof assets.$inferInsert;
export type TransactionDb = typeof transactions.$inferInsert;
