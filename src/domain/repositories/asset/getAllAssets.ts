import { db } from '@database/db';
import * as schema from '@database/schema';
import { AssetDb } from '@database/types';

export const getAllAssets = async (): Promise<AssetDb[]> => {
	const assets = await db.select().from(schema.assets);

	return assets;
};
