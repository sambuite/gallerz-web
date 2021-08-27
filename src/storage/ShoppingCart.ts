const SHOPPING_CART_KEY = '@shopping-cart';

export const shoppingCartStorage = {
  set(value: any) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(SHOPPING_CART_KEY, val);
  },
  get() {
    const storaged = localStorage.getItem(SHOPPING_CART_KEY);
    return storaged ? JSON.parse(storaged) : storaged;
  },
  remove() {
    localStorage.removeItem(SHOPPING_CART_KEY);
  },
};
