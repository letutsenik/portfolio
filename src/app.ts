import { PortfolioRepository, UserRepository } from './domain/repositories';

// eslint-disable-next-line no-console
console.log('Hello portfolio API');

const main = async () => {
	// const userInput = {
	// 	firstName: 'Roman',
	// 	lastName: 'Rekun',
	// 	fullName: 'Roman Rekun',
	// 	phone: '+1 025 0236 111',
	// 	email: 'email@example.com',
	// };
	// const newUser = await UserRepository.createUser(userInput);

	// // eslint-disable-next-line no-console
	// console.log('newUser: ', newUser);

	// const updateUserInput = {
	// 	phone: '+1 025 0236 888',
	// };

	// const updateResponse = await UserRepository.updateUser(
	// 	'email@example.com',
	// 	updateUserInput,
	// );
	// // eslint-disable-next-line no-console
	// console.log('updateResponse: ', updateResponse);

	// const deleteResponse = await UserRepository.deleteUser('email@example.com');
	// // eslint-disable-next-line no-console
	// console.log('deleteResponse: ', deleteResponse);

	const newPortfolio = await PortfolioRepository.createPortfolio({
		name: 'Second',
		userId: '623333a0-0d06-4877-938f-26dd39f9a855',
	});

	// eslint-disable-next-line no-console
	console.log('newPortfolio: ', newPortfolio);

	const users = await UserRepository.getAllUsers();
	// eslint-disable-next-line no-console
	console.log('users: ', users);
};

main();
