"use client";

import { useState } from "react";

const whatsappMessage = encodeURIComponent(
  "Hola VV Signature 💗 Quiero conocer las opciones para regalar en San Valentín."
);

export default function ValentinesPromo() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="valentines-promo" aria-label="Promoción de San Valentín">
      <div className="valentines-promo__inner">
        <span className="valentines-promo__tag">San Valentín</span>
        <p>
          <strong>Flores que no se marchitan.</strong>
          <span> Regala un detalle que se convierte en aroma, luz y recuerdo.</span>
        </p>
        <a
          href={`https://wa.me/573104604446?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="valentines-promo__cta"
        >
          Encontrar mi regalo
          <span aria-hidden="true">→</span>
        </a>
        <button
          type="button"
          className="valentines-promo__close"
          onClick={() => setVisible(false)}
          aria-label="Cerrar promoción de San Valentín"
        >
          ×
        </button>
      </div>
    </aside>
  );
}
