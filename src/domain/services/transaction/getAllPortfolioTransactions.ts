import { TransactionDb } from '@database/types';
import { TransactionRepository } from 'src/domain/repositories';

export async function getAllPortfolioTransactions(
	portfolioId: string,
): Promise<TransactionDb[]> {
	return TransactionRepository.getAllPortfolioTransactions(portfolioId);
}
