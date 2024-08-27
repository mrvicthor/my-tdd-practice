import ShoppingCart from "../shoppingCart";

describe("shoppingCart", () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });
  it("should contain both quantity and price", () => {
    const items = cart.list();
    items.forEach((item: { price: number; quantity: number }) => {
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("quantity");
    });
  });

  it("both quantity and price should be numbers", () => {
    const items = cart.list();
    items.forEach((item: { price: number; quantity: number }) => {
      expect(typeof item.price).toBe("number");
      expect(typeof item.quantity).toBe("number");
    });
  });

  it("calculates the total price", () => {
    const totalPrice = cart.calculateTotalPrice();
    expect(typeof totalPrice).toBe("number");
  });

  it("add item to cart", () => {
    cart.addItem({ price: 100, quantity: 1 });
    const items = cart.list();
    expect(items).toHaveLength(1);
  });

  it("apply 5% discount if gross price is greater than 100", () => {
    cart.addItem({ price: 50, quantity: 1 });
    cart.addItem({ price: 80, quantity: 1 });
    cart.calculateTotalPrice();
    const discountedPrice = cart.applyDiscount();
    expect(discountedPrice).toBe(123.5);
  });
  it("apply 10% discount if gross price is greater than 200", () => {
    cart.addItem({ price: 100, quantity: 1 });
    cart.addItem({ price: 200, quantity: 1 });
    cart.addItem({ price: 300, quantity: 1 });
    cart.calculateTotalPrice();
    const discountedPrice = cart.applyDiscount();
    expect(discountedPrice).toBe(540);
  });
});
