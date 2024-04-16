import { UserRepository } from 'src/domain/repositories';

export const getAllUsers = async () => {
	const users = await UserRepository.getAllUsers();
	// eslint-disable-next-line no-console
	console.log('users: ', users);
};
