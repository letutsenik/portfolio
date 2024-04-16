import { UserRepository } from 'src/domain/repositories';

export const deleteUser = async () => {
	const deleteResponse = await UserRepository.deleteUser('email@example.com');
	// eslint-disable-next-line no-console
	console.log('deleteResponse: ', deleteResponse);
};
