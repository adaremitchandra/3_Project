class CartItem {
  constructor(quantity, productTitle, productPrice, sum) {
    (this.quantity = quantity),
      (this.productPrice = productPrice),
      (this.productTitle = productTitle),
      (this.sum = sum);
  }
}

export default CartItem;
