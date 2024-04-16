import { db } from '@database/db';
import * as schema from '@database/schema';
import { eq } from 'drizzle-orm';

export const deleteAsset = async (
	assetId: string,
): Promise<{ id: string }[]> => {
	const deletedAssetId: { id: string }[] = await db
		.delete(schema.assets)
		.where(eq(schema.assets.id, assetId))
		.returning({ id: schema.assets.id });

	return deletedAssetId;
};
