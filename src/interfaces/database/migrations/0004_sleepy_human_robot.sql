CREATE TABLE IF NOT EXISTS "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_type" text NOT NULL,
	"quantity" double precision DEFAULT 0 NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"date" date NOT NULL
);
