// eslint-disable-next-line prettier/prettier
export interface productInput {
  pName: string;
  price: number;
}
export interface IProductUpdateInput {
  pName?: string;
  price?: number;
}

export interface product {
  pId: string;
  pName: string;
  price: number;
}
