import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'
import ProductCard from "./ProductCard";

const Sale = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        const discountedProducts = response.data.filter(
          (product) => product.discont_price && product.discont_price < product.price
        );
        setSaleProducts(discountedProducts.slice(0, 4)); 
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaleProducts();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="sale-container">
      <div className="sale-header">
        <h1 className="sale-title">Sale</h1>
        <div className="sale-line"></div>
        <button className="all-sale-button" onClick={() => navigate("/all-sale")}>
          All Sale
        </button>
      </div>

      <div className="sale-grid">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
