ALTER TABLE "users" ADD COLUMN "email" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_unique" UNIQUE("id");