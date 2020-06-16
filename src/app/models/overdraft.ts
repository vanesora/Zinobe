export interface OverdraftInterface {
    userId: string;
    answer: boolean;
    amount: number;
    status: 'positive' | 'negative';
    id?: string;
}
