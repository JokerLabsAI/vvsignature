"use client";

import { useEffect, useState } from "react";
import ValentinesPromo from "@/components/ValentinesPromo";
import { Logo } from "@/components/Ornament";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`top-bar ${scrolled ? "is-scrolled" : ""}`}>
      <ValentinesPromo />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="VV Signature Candles - Inicio">
          <Logo compact />
        </a>
        <button
          className={`menu-button ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span /> <span />
        </button>
        <nav className={open ? "nav open" : "nav"} onClick={() => setOpen(false)}>
          <a href="#nosotros">Nuestra esencia</a>
          <a href="#coleccion">Colección</a>
          <a href="#atelier">Atelier</a>
          <a href="#accesorios">Accesorios</a>
          <a href="#contacto">Contacto</a>
          <a className="nav-cta" href="https://wa.me/573104604446" target="_blank" rel="noreferrer">
            Ordenar
          </a>
        </nav>
      </header>
    </div>
  );
}
