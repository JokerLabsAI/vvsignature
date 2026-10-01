import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index, featured = false }: { product: Product; index: number; featured?: boolean }) {
  const question = product.price.startsWith("Precio") ? "¿Me cuentan precio y disponibilidad?" : "¿Me cuentan disponibilidad de colores y aromas?";
  const message = encodeURIComponent(`Hola VV Signature, me interesa ${product.name}. ${question}`);
  return (
    <article className={`product-card ${featured ? "featured" : ""} ${product.hoverImage ? "has-hover" : ""}`}>
      <div className="product-media">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={featured ? "(max-width: 900px) 100vw, 40vw" : "(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"}
          className="product-image"
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="product-image product-image--hover"
          />
        )}
        <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="product-body">
        <p className="product-subtitle">{product.subtitle}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        {product.details && (
          <ul className="detail-list">
            {product.details.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        {product.includes && (
          <p className="includes">
            <span>Incluye</span> {product.includes.join(" · ")}
          </p>
        )}
        <div className="product-footer">
          <strong>{product.price}</strong>
          <a href={`https://wa.me/573104604446?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Pedir ${product.name} por WhatsApp`}>
            Quiero este <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
