import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import "../styles/product.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

<Helmet>
  <title>Discover Our Products | Appscrip Task</title>
  <meta name="description" content="Product listing built using React & Vite, fetching products via FakeStore API." />
</Helmet>

  return (
    <main className="container">
      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Explore our curated range of products across categories fetched from
          the FakeStore API.
        </p>
      </section>

      <div className="content">
        <aside className="sidebar">
          <FilterSidebar />
        </aside>

        <section className="products">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Products;
