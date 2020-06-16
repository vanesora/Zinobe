import { UserInterface } from './user';

export interface OverdraftUserInterface {
    user: UserInterface;
    answer: boolean;
    amount: number;
    status: string;
    id?: string;
}
