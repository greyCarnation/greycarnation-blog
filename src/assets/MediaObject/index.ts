export interface ProductList {
  name: string;
  description: string;
  imageURL: string | string[];
  price: Number;
}
export const products: ProductList[] = [
  {
    name: "testProduct01",
    description: "test01",
    imageURL: "",
    price: 1.00,
  },
  {
    name: "testProduct02",
    description: "test02",
    imageURL: "",
    price: 3.00,
  },
];
