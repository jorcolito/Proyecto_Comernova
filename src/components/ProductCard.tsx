import { useState } from "react";
import type { Product } from "../types/Product";
import { products } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const total = product.price * quantity;

  const whatsappNumber = "593994328281";

  const message = `Hola, estoy interesad@ en este producto: 
    
    Producto: ${product.name}
    Medidas: ${product.measurements}
    Cantidad: ${quantity}
    Precio Unitario: $${product.price}
    Total $${total.toFixed(2)}
    
    Esta disponible?`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div>
        <p className="stock-text">
          {product.inStock ? "Disponible" : "Sin stock"}
        </p>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <p>
          <strong>Medidas:</strong> {product.measurements}
        </p>

        <p className="price">${product.price}</p>

        <div className="quantity-box">
          <p>Cantidad</p>
          <div className="quantity-controls">
            <button onClick={decreaseQuantity} disabled={quantity === 1}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <p className="total-price">
          Total:<strong>${total.toFixed(2)}</strong>
        </p>

        <a
          href={product.inStock ? whatsappUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`whatsapp-button ${!product.inStock ? "disabled" : ""}`}
          onClick={(event) => {
            if (!product.inStock) {
              event.preventDefault();
            }
          }}
        >
          {product.inStock ? "Comprar por WhatsApp" : "Producto agotado"}
        </a>
      </div>
    </article>
  );
}
