import { Transaction } from './Transaction';
import { Asset } from './Asset';

export interface Portfolio {
	id: string;
	name: string;
	transactions: Transaction[];
	assets: Asset[];
	userId: string;
}
