import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './db';

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: './src/interfaces/database//migrations' })
	.then(() => {
		// eslint-disable-next-line no-console
		console.log('Migrations complete!');
		process.exit(0);
	})
	.catch(err => {
		// eslint-disable-next-line no-console
		console.error('Migrations failed!', err);
		process.exit(1);
	});
