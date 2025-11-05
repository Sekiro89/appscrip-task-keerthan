import "../styles/filters.css";

export default function FilterSidebar() {
  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Category</h4>
        <label><input type="checkbox" /> Men's Clothing</label><br />
        <label><input type="checkbox" /> Women's Clothing</label><br />
        <label><input type="checkbox" /> Jewelry</label><br />
        <label><input type="checkbox" /> Electronics</label>
      </div>

      <div className="filter-section">
        <h4>Availability</h4>
        <label><input type="checkbox" /> In Stock</label><br />
        <label><input type="checkbox" /> Out of Stock</label>
      </div>
    </div>
  );
}
