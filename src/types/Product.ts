export interface Product {
    id: number;
    name: string;
    slug: string,
    description: string;
    fullDescription: string;
    measurements: string;
    price: number;
    image: string;
    inStock: boolean;
    paymentUrl?:string;
}