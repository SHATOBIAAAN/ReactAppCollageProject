import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const ProductsByCategory = () => {
  const { categoryId } = useParams();

  
  const categoryNames = {
    1: "Annuals",
    2: "Nursery",
    3: "Garden Art",
    4: "Plant Care",
    5: "Seasonal",
  };

  const categoryTitle = categoryNames[categoryId] || "Неизвестная категория";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/products/category/${categoryId}`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err.response || err);
        setError("Не удалось загрузить продукты.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="sale-container">
      <h1 className="category-title">{categoryTitle}</h1>
      <div className="sale-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
