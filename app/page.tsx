import Image from "next/image";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      <Header />

      <section id="inicio" className="hero">
        <Image src="/images/page-01-img-1.png" alt="Bouquet de velas VV Signature" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">Catálogo 2026</p>
          <h1>Regala algo que<br /><em>permanezca.</em></h1>
          <p>Velas artesanales convertidas en flores, aromas y momentos que merecen ser recordados.</p>
          <div className="hero-actions">
            <a href="#coleccion" className="button primary">Descubrir colección</a>
            <a href="https://wa.me/573104604446" target="_blank" rel="noreferrer" className="button ghost">Hablar por WhatsApp</a>
          </div>
        </div>
        <a href="#nosotros" className="scroll-cue" aria-label="Bajar a nuestra esencia">↓</a>
      </section>

      <section id="nosotros" className="story section-pad">
        <div className="story-copy">
          <p className="eyebrow">Nuestra esencia</p>
          <h2>Cada detalle tiene una historia. Cada creación lleva nuestra firma.</h2>
          <p>En VV Signature creemos que regalar es una forma de transmitir emociones. Cada creación nace de un proceso artesanal, cuidado hasta el último detalle, para convertir la cera, los aromas y las flores en una experiencia única.</p>
          <p>Nuestra esencia está en lo extraordinario de los pequeños detalles: diseños sofisticados, delicados y atemporales, creados para sorprender y hacer de cada regalo un recuerdo inolvidable.</p>
          <blockquote>No creamos simplemente velas. Creamos piezas que hablan de elegancia, intención y momentos que merecen permanecer.</blockquote>
        </div>
        <div className="story-visual">
          <Image src="/images/page-02-img-1.png" alt="Vela artesanal VV Signature encendida" fill sizes="(max-width: 800px) 100vw, 45vw" className="cover-image" />
        </div>
      </section>

      <section id="coleccion" className="collection section-pad">
        <div className="section-heading">
          <p className="eyebrow">Colección Signature</p>
          <h2>Flores que iluminan.</h2>
          <p>Cada pieza se elabora artesanalmente y puede personalizarse en color y aroma según disponibilidad.</p>
        </div>
        <div className="products">
          {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
        </div>
      </section>

      <section id="accesorios" className="accessories section-pad">
        <div className="section-heading light">
          <p className="eyebrow">Completa el ritual</p>
          <h2>Accesorios</h2>
        </div>
        <div className="accessory-grid">
          <article>
            <div className="accessory-image"><Image src="/images/page-10-img-1.png" alt="Pebetero difusor de aroma" fill className="contain-image" sizes="300px" /></div>
            <h3>Pebetero</h3><p>Difusor de aroma de porcelana</p><strong>$20.000 COP</strong>
          </article>
          <article>
            <div className="accessory-image"><Image src="/images/page-10-img-2.png" alt="Frasco de fósforos" fill className="contain-image" sizes="300px" /></div>
            <h3>Frasco de fósforos</h3><p>Incluye adhesivo para encenderlos</p><strong>$5.000 COP</strong>
          </article>
          <article>
            <div className="accessory-image"><Image src="/images/page-10-img-3.png" alt="Velas de té" fill className="contain-image" sizes="300px" /></div>
            <h3>Velas de té</h3><p>El complemento perfecto para tu momento</p><strong>$2.500 COP</strong>
          </article>
        </div>
      </section>

      <section id="contacto" className="contact section-pad">
        <div className="contact-logo">
          <Image src="/images/page-11-img-1.jpeg" alt="VV Signature Candles" fill className="cover-image" sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Gracias por confiar en nosotros</p>
          <h2>Hagamos especial tu próximo regalo.</h2>
          <p>Cada vela está elaborada con dedicación y amor por el detalle. Estamos aquí para ayudarte a elegir la pieza, el color y el aroma para tu ocasión.</p>
          <div className="contact-links">
            <a href="https://wa.me/573104604446" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>310 460 4446</strong></a>
            <a href="https://www.instagram.com/vvsignaturec" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@vvsignaturec</strong></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-v">V</span>Signature Candles</div>
        <p>Hecho artesanalmente para momentos inolvidables.</p>
        <p>© 2026 VV Signature.</p>
      </footer>
    </main>
  );
}
