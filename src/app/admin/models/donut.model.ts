export interface Donut {
    id: string;
    name: string;
    price: number;
    icon: string;
    description: string;
    promo?: 'new' | 'limited';
}
