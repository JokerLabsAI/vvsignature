import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const message = encodeURIComponent(`Hola VV Signature, me interesa ${product.name}. ¿Me cuentan disponibilidad de colores y aromas?`);
  return (
    <article className={`product-card ${index % 2 ? "reverse" : ""}`}>
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 850px) 100vw, 48vw" className="product-image" />
      </div>
      <div className="product-content">
        <p className="eyebrow">VV Signature</p>
        <h3>{product.name}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
        <p className="product-description">{product.description}</p>
        {product.details && (
          <ul className="detail-list">
            {product.details.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <div className="includes">
          <span>Incluye</span>
          <p>{product.includes.join(" · ")}</p>
        </div>
        <p className="customize">Elige color y aroma según disponibilidad.</p>
        <div className="product-footer">
          <strong>{product.price}</strong>
          <a href={`https://wa.me/573104604446?text=${message}`} target="_blank" rel="noreferrer">Quiero este</a>
        </div>
      </div>
    </article>
  );
}
