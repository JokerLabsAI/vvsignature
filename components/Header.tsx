"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="VV Signature Candles - Inicio">
        <span className="brand-v">V</span>
        <span className="brand-text">Signature <small>CANDLES</small></span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">
        <span /> <span /> <span />
      </button>
      <nav className={open ? "nav open" : "nav"} onClick={() => setOpen(false)}>
        <a href="#nosotros">Nuestra esencia</a>
        <a href="#coleccion">Colección</a>
        <a href="#accesorios">Accesorios</a>
        <a href="#contacto">Contacto</a>
        <a className="nav-cta" href="https://wa.me/573104604446" target="_blank" rel="noreferrer">Ordenar</a>
      </nav>
    </header>
  );
}
