import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    n: "01", name: "Casa Nera", type: "Residential · Milan, Italy", year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    className: "project-large"
  },
  {
    n: "02", name: "The Still House", type: "Private residence · Copenhagen", year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    className: "project-small"
  },
  {
    n: "03", name: "Form & Field", type: "Hospitality · London, UK", year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
    className: "project-wide"
  }
];

function Image({ src, alt, className = "" }) {
  return <div className={`image-wrap ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

export default function App() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ onComplete: () => setLoaded(true) });
      intro.from(".loader-mark", { y: 30, opacity: 0, duration: .8, ease: "power3.out" })
           .to(".loader", { yPercent: -100, duration: 1, delay: .2, ease: "power4.inOut" })
           .from(".hero-kicker, .hero-title, .hero-bottom", { y: 35, opacity: 0, stagger: .12, duration: 1, ease: "power3.out" }, "-=.45");

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 55, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });

      gsap.utils.toArray(".image-wrap img").forEach((img) => {
        gsap.fromTo(img, { scale: 1.13 }, {
          scale: 1, ease: "none",
          scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });

      gsap.to(".hero-image img", {
        yPercent: 14, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });

      gsap.from(".manifesto-word", {
        yPercent: 110, stagger: .08, duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: ".manifesto", start: "top 75%" }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={root}>
      <div className="loader"><span className="loader-mark">F<span>—</span>FORMA</span><span className="loader-caption">INTERIOR ARCHITECTURE / 2025</span></div>

      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu}>FORMA<span>®</span></a>
        <span className="header-note">SPACES WITH INTENTION</span>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={13}/></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" alt="Sunlit contemporary interior" />
        </div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="hero-kicker">INDEPENDENT INTERIOR ARCHITECTURE STUDIO <span>— EST. 2012</span></p>
          <h1 className="hero-title">A quieter<br/><i>kind</i> of living.</h1>
          <div className="hero-bottom">
            <p>We shape thoughtful spaces<br/>for the way life unfolds.</p>
            <a href="#work" className="circle-link">SCROLL TO EXPLORE <ArrowDownRight size={18}/></a>
          </div>
        </div>
        <span className="hero-index">01 / 04</span>
      </section>

      <section className="intro section-pad" id="studio">
        <div className="section-label reveal"><span>01</span> / THE STUDIO</div>
        <div className="intro-copy">
          <p className="eyebrow reveal">LESS, BUT WITH MEANING.</p>
          <h2 className="reveal">We believe a space should feel as good as <i>it looks.</i></h2>
          <div className="intro-foot reveal">
            <p>FORMA is an independent interior architecture studio creating enduring spaces through material honesty, quiet detail and a deep understanding of how people live.</p>
            <a href="#contact" className="text-link">MORE ABOUT US <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-heading reveal">
          <div className="section-label"><span>02</span> / SELECTED WORK</div>
          <p>A selection of spaces<br/>made to be lived in.</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <article className={`project ${p.className}`} key={p.n}>
              <Image src={p.image} alt={`${p.name} interior project`} />
              <div className="project-meta">
                <div><span className="project-number">{p.n} / 03</span><h3>{p.name}</h3><p>{p.type}</p></div>
                <span className="project-year">{p.year} <ArrowUpRight size={16}/></span>
              </div>
            </article>
          ))}
        </div>
        <div className="work-end reveal"><span>MORE STORIES, MORE SPACES.</span><a href="#contact">DISCUSS A PROJECT <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image"><img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2000&q=85" alt="Minimal natural material interior" loading="lazy"/></div>
        <div className="manifesto-overlay"></div>
        <div className="manifesto-content">
          <p className="eyebrow">OUR POINT OF VIEW</p>
          <h2><span className="manifesto-word">Good design</span><br/><span className="manifesto-word">doesn't ask</span><br/><span className="manifesto-word"><i>for attention.</i></span></h2>
          <p className="manifesto-note">It earns its place, every day.</p>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-label reveal"><span>03</span> / WHAT WE DO</div>
        <div className="services-main">
          <h2 className="reveal">Considered<br/><i>from every angle.</i></h2>
          <div className="service-list">
            {[
              ["01", "Interior architecture", "Spatial planning, concept development and architectural detailing."],
              ["02", "Interior design", "A considered approach to material, colour, lighting and furniture."],
              ["03", "Furniture & objects", "Curated pieces and bespoke elements that make a space yours."],
              ["04", "Art direction", "The finishing layer: styling, sourcing and visual storytelling."]
            ].map(([n, title, desc]) => <div className="service-row reveal" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={17}/></div>)}
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-label"><span>04</span> / START A CONVERSATION</div>
        <div className="contact-main">
          <p className="eyebrow reveal">HAVE A SPACE IN MIND?</p>
          <h2 className="reveal">Let's make<br/><i>room for life.</i></h2>
          <a className="contact-link reveal" href="mailto:hello@forma.studio">HELLO@FORMA.STUDIO <ArrowUpRight size={20}/></a>
        </div>
        <footer>
          <a href="#top" className="wordmark">FORMA<span>®</span></a>
          <span>© FORMA STUDIO 2025</span>
          <div><a href="#top">INSTAGRAM <ArrowUpRight size={12}/></a><a href="#top">BACK TO TOP ↑</a></div>
        </footer>
      </section>
    </main>
  );
}
