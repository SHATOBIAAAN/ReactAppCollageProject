import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import basket from '../img/basket.svg';
import ProductFilter from "./ProductFilter";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCartOpen] = useState(false);

  const handleNavigation = (path) => navigate(path);

  const isPresentationVisible = ![
    "/all-products",
    "/all-categories",
    "/all-sale",
    "/cart",
    "/products/1",
    "/products/2",
    "/products/3",
    "/products/4",
    "/products/5",
  ].includes(location.pathname);

  return (
    <header>
      <div>
        <img
          className="logo"
          src="/logo.svg"
          alt="Logo"
          style={{ width: "70px", height: "70px", cursor: "pointer" }}
          onClick={() => handleNavigation("/")}
        />
        <nav>
          <ul className="nav">
            <li onClick={() => handleNavigation("/")} style={{ cursor: "pointer" }}>
              Main Page
            </li>
            <li onClick={() => handleNavigation("/all-categories")}>Categories</li>
            <li onClick={() => handleNavigation("/all-products")}>All products</li>
            <li onClick={() => handleNavigation("/all-sale")}>All sales</li>
          </ul>
        </nav>
        <img
          src={basket}
          alt="basket"
          style={{ width: "44px", height: "48px", cursor: "pointer", marginRight: "40px" }}
          className="shop-cart-button"
          onClick={() => handleNavigation("/cart")}
        />
        {isCartOpen && <div className="shop-cart"></div>}
      </div>

      {location.pathname === "/all-products" && (
        <div className="product-filter-wrapper">
          <ProductFilter />
        </div>
      )}

      {isPresentationVisible && (
        <div className="presentation">
          <button onClick={() => handleNavigation("/all-sale")} className="check-out-btn">Check out</button>
        </div>
      )}
    </header>
  );
}
