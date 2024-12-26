import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'

const AllSale = () => {
  const [productsOnSale, setProductsOnSale] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3333/products/all");
        const sales = data.filter(
          (item) => item.discont_price && item.discont_price < item.price
        );
        setProductsOnSale(sales);
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <section className="sale-container">
      <div className="sale-grid">
        {productsOnSale.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllSale;