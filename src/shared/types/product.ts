export type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  user: {
    id: string;
    name: string;
  };
};

export type ProductToBuyType = ProductType & {
  quantity: number;
  type: number;
};
