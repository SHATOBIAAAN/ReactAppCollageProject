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

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const discountPercentage = product.discont_price
    ? Math.round(((product.price - product.discont_price) / product.price) * 100)
    : null;

  return (
    <article className="product-card">
      <div className="product-card-overlay">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      {discountPercentage !== null && (
        <div className="discount-tag">-{discountPercentage}%</div>
      )}
      <img
        src={`http://localhost:3333/public${product.image}`}
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-pricing">
          <span className="current-price">
            ${product.discont_price || product.price}
          </span>
          {product.discont_price && (
            <span className="old-price">${product.price}</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
