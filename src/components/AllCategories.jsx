import React from "react";
import Categories from "./Categories";
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'

const AllCategoriesPage = () => (
  <section style={{ padding: "2.5rem" }}>
    <Categories showAll />
  </section>
);

export default AllCategoriesPage;