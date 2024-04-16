import { PortfolioRepository } from 'src/domain/repositories';

export const createPortfolio = async () => {
	const newPortfolio = await PortfolioRepository.createPortfolio({
		name: 'Main',
		userId: 'c27baee7-e6d2-48a6-8ae9-a5b9ed1a6171',
	});

	// eslint-disable-next-line no-console
	console.log('newPortfolio: ', newPortfolio);
};
