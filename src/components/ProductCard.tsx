import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard ({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>

            <div className="product-info">
                <span 
                    className={`stock-badge ${
                        product.inStock ? "available" : "out-of-stock"
                    }`}
                >
                {product.inStock ? "Disponible" : "Sin Stock"}
                </span>

                <h3>{product.name}</h3>

                <p className="product-description"> {product.description}</p>

                <p className="product-measurements">
                    <strong>Medidas:</strong> {product.measurements}
                </p>
                <p className="product-price">${product.price}</p>
            </div>
        </article>
    )
}