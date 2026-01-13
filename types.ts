
export type Language = 'bn' | 'en';

export interface Product {
  id: string;
  name_bn: string;
  name_en: string;
  price: number;
  unit: string;
  category: ProductCategory;
  image: string;
  farmerName: string;
  location: string;
  isVerified: boolean;
}

export type ProductCategory = 'vegetables' | 'fruits' | 'fish' | 'rice' | 'livestock';

export interface Order {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  buyerName: string;
  paymentMethod: string;
  date: string;
}

export interface Farmer {
  id: string;
  name: string;
  phone: string;
  location: string;
  category: ProductCategory;
  isVerified: boolean;
}
