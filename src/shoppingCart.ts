type CartProps = {
  price: number;
  quantity: number;
};

export default class ShoppingCart {
  private cart: CartProps[];
  constructor() {
    this.cart = [];
  }

  list(): CartProps[] {
    return this.cart;
  }

  calculateTotalPrice(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  addItem(item: CartProps) {
    this.cart = [...this.cart, item];
  }

  applyDiscount(): number {
    const percentage = this.calculateTotalPrice() > 200 ? 10 : 5;
    const discount = (this.calculateTotalPrice() * percentage) / 100;
    return this.calculateTotalPrice() - discount;
  }
}
