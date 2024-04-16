import { UserRepository } from 'src/domain/repositories';

export const createUser = async () => {
	const userInput = {
		firstName: 'John',
		lastName: 'Gold',
		fullName: 'John Gold',
		phone: '+1 333 2525 111',
		email: 'john.gold@mail.com',
	};
	const newUser = await UserRepository.createUser(userInput);

	// eslint-disable-next-line no-console
	console.log('newUser: ', newUser);
};
