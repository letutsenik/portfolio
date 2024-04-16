import { db } from '@database/db';
import * as schema from '@database/schema';
import { AssetDb } from '@database/types';

export const createAsset = async (asset: AssetDb): Promise<AssetDb> => {
	const response = await db.insert(schema.assets).values(asset).returning();

	return response[0];
};
