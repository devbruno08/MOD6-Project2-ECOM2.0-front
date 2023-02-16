export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageURL: string;
};

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  category: string;
  imageURL: string;
};

export type CartProduct = {
  id: string;
  name: string;
  quantity: number;
}
