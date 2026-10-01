import Image from "next/image";
import { Ornament } from "@/components/Ornament";

type Shot = { src: string; name: string; layout?: "wide" | "tall"; position?: string };

// Catalogue photography of the candles only (logo artwork is intentionally left out).
const shots: Shot[] = [
  { src: "/images/atelier/bouquet-gift.jpg", name: "Bouquet Signature", layout: "wide", position: "center 40%" },
  { src: "/images/page-03-img-1.jpeg", name: "Signature Royale", layout: "wide", position: "center 60%" },
  { src: "/images/page-04-img-1.png", name: "Majestic Signature" },
  { src: "/images/page-06-img-1.png", name: "Signature Mini" },
  { src: "/images/page-05-img-1.png", name: "Signature Petit" },
  { src: "/images/page-09-img-1.jpeg", name: "Vela Lumière", position: "40% 70%" },
  { src: "/images/page-08-img-1.jpeg", name: "Signature Blossom", layout: "wide", position: "center 65%" },
  { src: "/images/page-07-img-1.jpeg", name: "Signature Romance", layout: "wide", position: "center 88%" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="gallery section">
      <header className="section-heading center">
        <p className="eyebrow">Galería</p>
        <h2>Cada pieza, <em>una firma</em></h2>
        <Ornament />
      </header>
      <div className="bento">
        {shots.map((shot) => (
          <a key={shot.src} href="#coleccion" className={`bento-item ${shot.layout ?? ""}`}>
            <Image
              src={shot.src}
              alt={`${shot.name} — vela artesanal VV Signature`}
              fill
              sizes={shot.layout === "wide" ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 50vw, 25vw"}
              className="cover"
              style={shot.position ? { objectPosition: shot.position } : undefined}
            />
            <span className="bento-caption">
              {shot.name}
              <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
