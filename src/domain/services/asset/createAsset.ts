import { AssetDb } from '@database/types';
import { AssetRepository } from 'src/domain/repositories';

export const createAsset = async () => {
	const assetInput: AssetDb = {
		name: 'Ethereum',
		symbol: 'ETH',
	};
	const newAsset = await AssetRepository.createAsset(assetInput);

	// eslint-disable-next-line no-console
	console.log('newAsset: ', newAsset);
};
