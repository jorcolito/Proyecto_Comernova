import "./App.css";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function App() {
    const firstProduct = products[0];

    return (
        <main className="app">
            <section className="hero">
                <h1>Comernova</h1>
                <p>Organización elegante para espacios sofisticados.</p>
            </section>

            <section className="products-section">
                <h2>Productos destacados</h2>

                <div className="products-section">
                    {products.map((product)=> (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}