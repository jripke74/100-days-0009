class Cart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(product) {
    const cartIem = {
      product: product,
      quantity: 1,
      totalPrice: product.price,
    };

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.product.id === product.id) {
        cartIem.quantity = cartItem.quantity + 1;
        cartIem.totalPrice = cartItem.totalPrice + product.price;
        this.items[i] = cartItem;
        return;
      }
    }

    this.items.push(cartIem);
  }
}

module.exports = Cart;
