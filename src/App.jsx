import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="main-section">
        <div className="main-container">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
