import React, { useState } from "react";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'
import HandsImage from '../img/off.svg';

const DiscountForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="discount-section">
      <figure className="discount-image">
        <img src={HandsImage} alt="Hands with plants" />
      </figure>

    
      <div className="discount-content">
        <h1 className="discount-title">5% off on the first order</h1>
        <form className="discount-form" onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="discount-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="discount-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="discount-input"
            required
          />
          <button
            type="submit"
            className={`discount-button ${submitted ? "submitted" : ""}`}
            disabled={submitted}
          >
            {submitted ? "Request Submitted" : "Get a discount"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;
