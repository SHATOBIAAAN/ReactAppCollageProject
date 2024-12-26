import React, { useState, useEffect } from "react";
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

const Categories = ({ showAll }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3333/categories/all");
        setCategories(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
        setErrorMessage("Не удалось загрузить категории.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelection = (id, title) => {
    navigate(`/products/${id}`, { state: { categoryTitle: title } });
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const categoriesToDisplay = showAll ? categories : categories.slice(0, 4);

  return (
    <section className="categories-container">
      <header className="categories-header">
        <h1 className="categories-title">Categories</h1>
        <div className="categories-line"></div>
        {!showAll && (
          <button
            className="all-categories-button"
            onClick={() => navigate("/all-categories")}
          >
            All categories
          </button>
        )}
      </header>
      <div className="categories-grid">
        {categoriesToDisplay.map(({ id, image, title }) => (
          <article
            key={id}
            className="category-item"
            onClick={() => handleCategorySelection(id, title)}
          >
            <img
              src={`http://localhost:3333/public${image}`}
              alt={title || "Без названия"}
              className="category-image"
            />
            <h3 className="category-title">{title || "Без названия"}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
