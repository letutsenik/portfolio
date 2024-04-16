import { db } from '@database/db';
import * as schema from '@database/schema';
import { AssetDb } from '@database/types';
import { eq } from 'drizzle-orm';

export const updateAsset = async (
	assetId: string,
	asset: Partial<AssetDb>,
): Promise<{ id: string }[]> => {
	const updatedAssetId: { id: string }[] = await db
		.update(schema.assets)
		.set(asset)
		.where(eq(schema.assets.id, assetId))
		.returning({ id: schema.assets.id });

	return updatedAssetId;
};
