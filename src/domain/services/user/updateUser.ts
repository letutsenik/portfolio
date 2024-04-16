import { UserRepository } from 'src/domain/repositories';

export const updateUser = async () => {
	const updateUserInput = {
		phone: '+1 025 0236 888',
	};

	const updateResponse = await UserRepository.updateUser(
		'email@example.com',
		updateUserInput,
	);
	// eslint-disable-next-line no-console
	console.log('updateResponse: ', updateResponse);
};
