"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Leaf } from "@/components/Ornament";
import { categories, products, type Category } from "@/data/products";

const customMessage = encodeURIComponent("Hola VV Signature, quiero una pieza personalizada.");

export default function Catalog() {
  const [active, setActive] = useState<Category | "all">("all");
  const visible = products
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => active === "all" || product.category === active);

  // The first piece of the full collection gets the wide "featured" card.
  const featuredShown = visible[0]?.index === 0;
  // On the 3-column desktop grid, stretch the closing card over the leftover columns.
  const used = (visible.length + (featuredShown ? 1 : 0)) % 3;
  const customSpan = used === 0 ? 3 : 3 - used;
  const activeCategory = categories.find((c) => c.id === active);

  return (
    <>
      <div className="catalog-filters" role="tablist" aria-label="Filtrar por tipo de vela">
        {[{ id: "all" as const, label: "Todas" }, ...categories].map((c) => {
          const count = c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={active === c.id ? "is-active" : ""}
              onClick={() => setActive(c.id)}
            >
              {c.label} <span>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="catalog-note">{activeCategory?.description ?? "Todas nuestras piezas, hechas a mano una a una."}</p>

      <div className="products">
        {visible.map(({ product, index }) => (
          <ProductCard key={product.name} product={product} index={index} featured={index === 0} />
        ))}
        <article className="custom-card" style={{ "--span": customSpan } as React.CSSProperties}>
          <Leaf size={28} />
          <p className="eyebrow">Hecho a tu medida</p>
          <h3>¿Tienes una idea <em>en mente?</em></h3>
          <p>Diseñamos piezas personalizadas en color, aroma y tamaño para bodas, aniversarios y eventos.</p>
          <a href={`https://wa.me/573104604446?text=${customMessage}`} target="_blank" rel="noreferrer" className="button button--gold">Crear la mía</a>
        </article>
      </div>
    </>
  );
}
