const SHOPPING_CART_KEY = '@shopping-cart';
export const ShoppingCartStorage = {
  set(value: any) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(SHOPPING_CART_KEY, val);
  },
  get() {
    return localStorage.getItem(SHOPPING_CART_KEY);
  },
  remove() {
    localStorage.removeItem(SHOPPING_CART_KEY);
  },
};
