import React, { useEffect, useState } from "react";
import "../styles/ProductGrid.css";

export default function ProductGrid({ onFilterToggle }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("recommended");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Discover Our Products | Appscrip Task";
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const sorted = React.useMemo(() => {
    if (sort === "price-low") return [...products].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...products].sort((a, b) => b.price - a.price);
    return products;
  }, [products, sort]);

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <section className="product-section">
      {/* ====== HEADER ====== */}
      <div className="product-header">
        {/* Mobile Filter + Sort */}
        <div className="mobile-filter-sort">
          <button
            className="filter-btn"
            onClick={() => onFilterToggle && onFilterToggle()}
          >
            FILTER
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sort-select"
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
          </select>
        </div>

        {/* Desktop Item Count + Sort */}
        <div className="desktop-header">
          <div className="left-info">3425 ITEMS</div>
          <div className="right-controls">
            <label className="sort-label">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>
      </div>

      {/* ====== PRODUCT GRID ====== */}
      <div className="product-grid">
        {sorted.map((p) => (
          <article className="product-card" key={p.id}>
            <div className="product-image-wrap">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="product-meta">
              <h3 className="product-title">{p.title}</h3>
              <div className="product-price">
                ₹{Number(p.price).toFixed(2)}
              </div>
              <div className="product-category">{p.category}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
