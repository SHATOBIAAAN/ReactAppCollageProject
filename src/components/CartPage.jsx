import React from "react";
import { useCart } from "../contexts/CartContext";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotals = (cartItems) => {
    const items = cartItems.reduce((count, product) => count + product.quantity, 0);
    const price = cartItems.reduce(
      (total, product) =>
        total + (product.discont_price || product.price) * product.quantity,
      0
    );
    return { items, price };
  };

  const { items: totalItems, price: totalPrice } = calculateTotals(cart);

  return (
    <section className="cart-container">
      <header>
        <h1>Shopping cart</h1>
      </header>
      <div className="cart-items">
        {cart.map(({ id, image, title, quantity, price, discont_price }) => (
          <article key={id} className="cart-item">
            <img src={`http://localhost:3333/public${image}`} alt={title} />
            <div className="cart-item-info">
              <h3>{title}</h3>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
              </div>
              <div className="cart-item-price">
                ${discont_price || price}{" "}
                {discont_price && <span className="old-price">${price}</span>}
              </div>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(id)}>
              ×
            </button>
          </article>
        ))}
      </div>
      <aside className="cart-summary">
        <h2>Order details</h2>
        <p>{totalItems} items</p>
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone number" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Order</button>
        </form>
      </aside>
    </section>
  );
};

export default CartPage;
