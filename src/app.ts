import { createUser } from './domain/repositories/user';
import { getAllUsers } from './domain/repositories/user/getAllUsers';

// eslint-disable-next-line no-console
console.log('Hello portfolio API');

const main = async () => {
	const newUser = {
		firstName: 'Bob',
		lastName: 'Sub',
		fullName: 'Bob Sub',
		phone: '+1 025 0236 666',
	};
	await createUser(newUser);
	const users = await getAllUsers();
	// eslint-disable-next-line no-console
	console.log('users: ', users);
};

// eslint-disable-next-line no-console
console.log('users: ', getAllUsers());

main();
