export interface ProductType {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  brand?: string;
  category?: number;
  subCategory?: number;
  fuelType?: number;
  description?: string;
  availability?: boolean;
  currency?: string;
}

export interface ProductInResponseType {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  brand?: string;
  category?: number;
  subCategory?: number;
  fuelType?: number;
  description?: string;
  availability?: boolean;
  currency?: string;
}
