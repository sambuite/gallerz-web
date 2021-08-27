export type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  userId: string;
};

export type ProductToBuyType = ProductType & {
  quantity: number;
  type: number;
};
