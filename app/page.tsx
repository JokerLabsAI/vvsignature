import Image from "next/image";
import Header from "@/components/Header";
import Catalog from "@/components/Catalog";
import Gallery from "@/components/Gallery";
import { Leaf, Logo, Ornament, Star } from "@/components/Ornament";
import { products } from "@/data/products";

const WHATSAPP = "https://wa.me/573104604446";

const values = ["Detalles que hacen la diferencia", "Aromas que inspiran historias", "Elegancia en cada detalle", "Luz que deja huella"];

const atelier = [
  { src: "/images/atelier/royale-wide.jpg", alt: "Signature Royale en tonos rosa y azul frente al muro VV Signature", className: "wide" },
  { src: "/images/atelier/majestic-room.jpg", alt: "Majestic Signature en tonos rosa y lila", className: "tall" },
  { src: "/images/atelier/blossom-room.jpg", alt: "Signature Blossom, canasta de flores en cera", className: "" },
  { src: "/images/atelier/royale-top-2.jpg", alt: "Detalle de rosas de cera desde arriba", className: "" },
  { src: "/images/atelier/majestic-top-2.jpg", alt: "Detalle de flores de cera rosa y lila", className: "tall" },
  { src: "/images/atelier/blossom-side.jpg", alt: "Canasta Signature Blossom con lazo rosa", className: "" },
];

const icedCoffeeMessage = encodeURIComponent("Hola VV Signature, me interesa la vela Iced Coffee. ¿Me cuentan precio y disponibilidad?");

export default function Home() {
  return (
    <main>
      <Header />

      {/* ───────── Hero ───────── */}
      <section id="inicio" className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><Star size={10} /> Colección 2026 · Hecho a mano</p>
          <h1>
            Regala algo que
            <span className="script-line">permanezca</span>
          </h1>
          <p className="hero-lede">
            Flores de cera moldeadas una a una, aromas elegidos con intención y una firma en cada detalle.
            Un regalo que se convierte en luz, aroma y recuerdo.
          </p>
          <div className="hero-actions">
            <a href="#coleccion" className="button button--gold">Descubrir colección</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button button--line">Hablar por WhatsApp</a>
          </div>
          <dl className="hero-stats">
            <div><dt>100%</dt><dd>Artesanal</dd></div>
            <div><dt>{products.length}</dt><dd>Piezas signature</dd></div>
            <div><dt>A tu gusto</dt><dd>Color y aroma</dd></div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-arch">
            <Image src="/images/atelier/royale-front.jpg" alt="Signature Royale, bouquet de rosas de cera en caja rosa" fill priority sizes="(max-width: 900px) 90vw, 38vw" className="cover" />
          </div>
          <div className="hero-float">
            <Image src="/images/atelier/majestic-front.jpg" alt="Majestic Signature en tonos rosa" fill sizes="200px" className="cover" />
          </div>
          <div className="seal" aria-hidden="true">
            <span className="seal-v">VV</span>
            <svg viewBox="0 0 100 100" className="seal-ring">
              <defs><path id="seal-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text><textPath href="#seal-path">VV SIGNATURE · EST. 2024 · HECHO A MANO ·</textPath></text>
            </svg>
          </div>
        </div>
      </section>

      {/* ───────── Marquee ───────── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...values, ...values].map((v, i) => (
            <span key={i}>{v} <Star size={9} /></span>
          ))}
        </div>
      </div>

      {/* ───────── Story ───────── */}
      <section id="nosotros" className="story section">
        <div className="story-visual">
          <div className="story-arch">
            <Image src="/images/atelier/iced-coffee.jpg" alt="Vela artesanal frente al muro dorado VV Signature" fill sizes="(max-width: 900px) 90vw, 40vw" className="cover" />
          </div>
          <p className="story-caption">Nuestro atelier</p>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Nuestra esencia</p>
          <h2>Cada detalle tiene una historia. <em>Cada creación lleva nuestra firma.</em></h2>
          <p>En VV Signature creemos que regalar es una forma de transmitir emociones. Cada creación nace de un proceso artesanal, cuidado hasta el último detalle, para convertir la cera, los aromas y las flores en una experiencia única.</p>
          <p>Nuestra esencia está en lo extraordinario de los pequeños detalles: diseños sofisticados, delicados y atemporales, creados para sorprender y hacer de cada regalo un recuerdo inolvidable.</p>
          <blockquote>
            <Leaf size={22} />
            No creamos simplemente velas. Creamos piezas que hablan de elegancia, intención y momentos que merecen permanecer.
          </blockquote>
        </div>
      </section>

      {/* ───────── Collection ───────── */}
      <section id="coleccion" className="collection section">
        <header className="section-heading center">
          <p className="eyebrow">Colección Signature</p>
          <h2>Luz que deja <em>huella</em></h2>
          <Ornament />
          <p>Bouquets florales, velas en vaso y velas de figura. Cada pieza se elabora artesanalmente y puede personalizarse en color y aroma según disponibilidad.</p>
        </header>
        <Catalog />
      </section>

      {/* ───────── Atelier / lookbook ───────── */}
      <section id="atelier" className="atelier section">
        <header className="section-heading split">
          <div>
            <p className="eyebrow">Desde el atelier</p>
            <h2>Hecho a mano, <em>pétalo a pétalo</em></h2>
          </div>
          <p>Fotografías reales de nuestras piezas recién terminadas. Cada flor se moldea, se pinta y se acomoda a mano: no hay dos iguales.</p>
        </header>
        <div className="lookbook">
          {atelier.map((img) => (
            <figure key={img.src} className={img.className}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 700px) 50vw, 33vw" className="cover" />
            </figure>
          ))}
        </div>

        <article className="spotlight">
          <div className="spotlight-media">
            <Image src="/images/atelier/iced-coffee-room.jpg" alt="Vela artesanal Iced Coffee sobre base de mármol" fill sizes="(max-width: 900px) 100vw, 45vw" className="cover" />
          </div>
          <div className="spotlight-copy">
            <p className="tag">Nuevo</p>
            <h3>Iced Coffee</h3>
            <p className="spotlight-sub">Vela artesanal de autor</p>
            <p>Inspirada en tu café favorito: capas cremosas, detalles que parecen hielo y un aroma cálido que acompaña tus mañanas.</p>
            <a href={`${WHATSAPP}?text=${icedCoffeeMessage}`} target="_blank" rel="noreferrer" className="button button--gold">Preguntar disponibilidad</a>
          </div>
        </article>
      </section>

      {/* ───────── Gallery ───────── */}
      <Gallery />

      {/* ───────── Accessories ───────── */}
      <section id="accesorios" className="accessories section">
        <header className="section-heading center">
          <p className="eyebrow">Completa el ritual</p>
          <h2>Accesorios</h2>
          <Ornament />
        </header>
        <div className="accessory-grid">
          {[
            { img: "/images/atelier/pebetero.png", alt: "Pebetero difusor de aroma", name: "Pebetero", desc: "Difusor de aroma de porcelana", price: "$20.000 COP" },
            { img: "/images/atelier/fosforos.png", alt: "Frasco de fósforos", name: "Frasco de fósforos", desc: "Incluye adhesivo para encenderlos", price: "$5.000 COP" },
            { img: "/images/atelier/velas-te.png", alt: "Velas de té", name: "Velas de té", desc: "El complemento perfecto para tu momento", price: "$2.500 COP" },
          ].map((a) => (
            <article key={a.name}>
              <div className="accessory-image"><Image src={a.img} alt={a.alt} fill className="contain" sizes="260px" /></div>
              <div className="accessory-info">
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
              <strong>{a.price}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── Contact ───────── */}
      <section id="contacto" className="contact section">
        <div className="contact-media">
          <Image src="/images/atelier/royale-hero.jpg" alt="Signature Royale en el atelier VV Signature" fill sizes="100vw" className="cover" />
        </div>
        <div className="contact-card">
          <p className="eyebrow">Gracias por confiar en nosotros</p>
          <h2>Hagamos especial tu <em>próximo regalo</em></h2>
          <p>Estamos aquí para ayudarte a elegir la pieza, el color y el aroma ideales para tu ocasión.</p>
          <div className="contact-links">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>310 460 4446</strong><i aria-hidden="true">↗</i></a>
            <a href="https://www.instagram.com/vvsignaturec" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@vvsignaturec</strong><i aria-hidden="true">↗</i></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Logo />
        <p className="footer-tagline">Más que velas, creamos momentos</p>
        <Ornament />
        <div className="footer-meta">
          <span>Hecho artesanalmente para momentos inolvidables.</span>
          <span>© 2026 VV Signature</span>
        </div>
      </footer>
    </main>
  );
}
