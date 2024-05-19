ALTER TABLE "transactions" ADD COLUMN "asset_id" varchar NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_asset_id_assets_symbol_fk" FOREIGN KEY ("asset_id") REFERENCES "assets"("symbol") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
