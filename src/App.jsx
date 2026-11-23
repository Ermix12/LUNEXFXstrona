
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Layers3,
  Clapperboard,
  Box,
  Crown,
  MessageCircle,
  Menu,
  X,
  MoveUpRight,
  Star,
  Music2,
  Youtube,
} from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.7, 0.2, 1],
    },
  },
};

const projects = [
{
  n: '01',
  type: 'WALLPAPER DESIGN',
  title: 'LUNEXFX CYBER HELMET',
  desc: 'Futurystyczna tapeta inspirowana stylem cyberpunk oraz identyfikacją marki LunexFX.',
  cls: 'art-void',
  tag: 'WALLPAPER',
},
  {
    n: '02',
    type: 'YOUTUBE THUMBNAIL',
    title: 'THE LAST PORTAL',
    desc: 'Miniatura zaprojektowana pod mocny pierwszy kadr.',
    cls: 'art-portal',
    tag: 'THUMBNAIL',
  },
  {
    n: '03',
    type: 'CHARACTER RENDER',
    title: 'NETHER KING',
    desc: 'Postać, światło i kompozycja w jednym kadrze.',
    cls: 'art-king',
    tag: '3D RENDER',
  },
  {
    n: '04',
    type: 'EVENT GRAPHICS',
    title: 'NIGHTFALL',
    desc: 'Oprawa graficzna eventu i materiałów promocyjnych.',
    cls: 'art-night',
    tag: 'BANNER',
  },
];

const services = [
  {
    icon: Layers3,
    no: '01',
    title: 'Bannery & grafiki',
    desc: 'Grafiki serwerowe, banery reklamowe i oprawy eventów, które budują rozpoznawalność projektu.',
    chips: ['Bannery', 'Grafiki eventowe', 'Social media'],
  },
  {
    icon: Clapperboard,
    no: '02',
    title: 'Miniatury YouTube',
    desc: 'Czytelna kompozycja, mocny focal point i światło, które zatrzymuje wzrok na miniaturze.',
    chips: ['YouTube', 'Twitch', 'Reklamy'],
  },
  {
    icon: Box,
    no: '03',
    title: 'Rendery 3D',
    desc: 'Dopracowane postacie, sceny i ujęcia inspirowane światem Minecraft — z kinowym oświetleniem.',
    chips: ['Postacie', 'Sceny', 'Key visual'],
  },
  {
    icon: Crown,
    no: '04',
    title: 'Branding & logotypy',
    desc: 'Spójny język wizualny dla serwerów, twórców i marek gamingowych — od znaku po pełny zestaw grafik.',
    chips: ['Logo', 'Identyfikacja', 'Pakiety'],
  },
];

const reviews = [
 {
   quote:
     'Współpraca przebiegła wzorowo. Grafiki zostały wykonane szybko, a efekt końcowy przerósł moje oczekiwania.',
   name: 'Kacper',
   role: 'Właściciel serwera Minecraft',
 },

 {
   quote:
     'Świetna jakość wykonania i bardzo dobry kontakt. Każdy detal został dopracowany dokładnie tak, jak chciałem.',
   name: 'Mateusz',
   role: 'Twórca internetowy',
 },

 {
   quote:
     'Profesjonalne podejście, duża kreatywność i szybka realizacja. Zdecydowanie polecam LunexFX każdemu, kto szuka grafiki najwyższej jakości.',
   name: 'Patryk',
   role: 'Klient indywidualny',
 },
];

function SectionHead({ eyebrow, title, copy }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-head"
    >
      <span className="eyebrow">
        <i />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {copy && <p>{copy}</p>}
    </motion.div>
  );
}

function MinecraftScene() {
  return (
    <div
      className="scene-wrap"
      aria-label="Dekoracyjna scena 3D inspirowana Minecraftem"
    >
      <div className="scene-grid" />
      <div className="scene-sun" />
      <div className="scene-moon" />

      <div className="floating-cube cube-a" />
      <div className="floating-cube cube-b" />
      <div className="floating-cube cube-c" />

      <div className="voxel-platform platform-back" />
      <div className="voxel-platform platform-front" />

      <div className="voxel-person">
        <div className="person-head">
          <i />
          <b />
        </div>

        <div className="person-body" />
        <div className="person-leg leg-a" />
        <div className="person-leg leg-b" />
        <div className="person-arm" />
      </div>

      <div className="scene-label label-top">
        LUNAR / 001 <span>RENDER STUDY</span>
      </div>

      <div className="scene-label label-bottom">
        <span>FIG. 01</span> WORLD BUILDING — 2026
      </div>

      <div className="scene-glow" />
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();

  const closeMenu = () => setMenu(false);

  return (
    <div className="site-shell">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* NAVIGATION */}
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          <img src="/lunexfx-logo.png" alt="LunexFX logo" />
          <span>
            LUNEX<span>FX</span>
          </span>
        </a>

        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
          <a href="#uslugi" onClick={closeMenu}>
            Usługi
          </a>
          <a href="#studio" onClick={closeMenu}>
            Studio
          </a>
          <a href="#opinie" onClick={closeMenu}>
            Opinie
          </a>
          <a href="#kontakt" onClick={closeMenu}>
            Kontakt
          </a>
        </nav>

        <a
          className="nav-cta"
          href="https://discord.gg/eVVX9M5nd"
          target="_blank"
          rel="noreferrer"
        >
          Dołącz na Discord <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-copy">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fade}
            >
              <div className="hero-kicker">
                <span className="live-dot" />
                PREMIUM MINECRAFT DESIGN
                <span className="kicker-year">LUNEXFX STUDIO</span>
              </div>

<h1>
 Tworzymy grafikę,
 <br />
 <em>która się wyróżnia.</em>
</h1>

              <p className="hero-lead">
 Tworzymy profesjonalne rendery, bannery,
 miniatury oraz branding dla serwerów Minecraft
 i twórców internetowych.
</p>

              <div className="hero-actions">
                <a className="btn-primary" href="#portfolio">
                  Zobacz portfolio <ArrowUpRight size={17} />
                </a>

                <a
                  className="btn-quiet"
                  href="https://discord.gg/eVVX9M5nd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} />
                  Skontaktuj się na Discordzie
                </a>
              </div>

              <div className="hero-proof">
                <div className="proof-avatars">
                  <span>L</span>
                  <span>F</span>
                  <span>+</span>
                </div>

                <div>
                  <b>Premium Minecraft Design</b>
<small>Tworzone z dbałością o każdy detal.</small>
                </div>

                <div className="proof-divider" />

                <div className="proof-note">
                  <Sparkles size={15} />
                  LUNEXFX STUDIO
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
  src="/manikiro-render.png"
  alt="Manikiro"
  className="hero-render"
/>


            <div className="visual-index">
              01 <span>—</span> 04
            </div>
          </motion.div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line" />
            <span>VISUALS BEYOND THE ORDINARY</span>
          </div>
        </section>

{/* TICKER */}
<div className="ticker">
  <div className="ticker-track">
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i}>
        LUNEXFX <b>✦</b>
        MINECRAFT DESIGN STUDIO <b>✦</b>
        PREMIUM THUMBNAILS <b>✦</b>
        CINEMATIC RENDERS <b>✦</b>
        SERVER BRANDING <b>✦</b>
        CUSTOM LOGOS <b>✦</b>
        NEXT LEVEL VISUALS <b>✦</b>
      </span>
    ))}
  </div>
</div>


        {/* PORTFOLIO */}
        <section id="portfolio" className="section portfolio">
          <SectionHead
            eyebrow="SELECTED WORK / 2026"
            title={
              <>
                Pomysły zamieniamy
                <br />
                <em>w mocne obrazy.</em>
              </>
            }
            copy="Każdy projekt zaczyna się od pomysłu. Kończy na grafice, która ma swój charakter."
          />

          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <motion.article
                key={p.n}
                className={`project-card ${
                  i % 2 ? 'project-offset' : ''
                }`}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className={`project-art ${p.cls}`}>
                  <div className="art-topline">
                    <span>{p.type}</span>
                    <span>LF / {p.n}</span>
                  </div>

                  {i === 0 ? (
  <img
    src="/lunexfx-wallpaper.png"
    alt="LunexFX Wallpaper"
    className="portfolio-image"
  />
) : (
  <>
    <div className="art-shape shape-one" />
    <div className="art-shape shape-two" />

    <div className="art-character">
      <i />
      <b />
    </div>

    <div className="art-title">
      {i === 1 ? 'PORTAL' : i === 2 ? 'NETHER' : 'NIGHT'}
      <small>
        {i === 1 ? 'AWAKENS' : i === 2 ? 'KING' : 'FALL'}
      </small>
    </div>
  </>
)}

                  <div className="art-bottomline">
                    <span>{p.tag}</span>
                    <span>CONCEPT VISUAL</span>
                  </div>

                  <div className="art-scan" />
                </div>

                <div className="project-meta">
                  <div>
                    <span className="project-no">
                      {p.n} / {p.type}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>

                  <span className="project-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="portfolio-foot">
            <span>SELECTED CONCEPTS — VISUAL DIRECTION</span>

            <a href="#kontakt">
              Masz projekt? Stwórzmy coś razem{' '}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* WHY LUNEXFX */}
        <section id="studio" className="section studio">
          <div className="studio-layout">
            <div>
              <SectionHead
                eyebrow="WHY LUNEXFX / THE APPROACH"
                title={
                  <>
                    Nie robimy
                    <br />
                    <em>grafik na sztukę.</em>
                  </>
                }
                copy="Dobra grafika to coś więcej niż efekt. To narzędzie, które buduje zaufanie, opowiada historię i sprawia, że marka zostaje w pamięci."
              />

              <div className="studio-statement">
                <span className="quote-mark">“</span>
                <p>
                  Projektujemy tak, aby Twój projekt wyglądał równie
                  dobrze, jak na to zasługuje.
                </p>
              </div>
            </div>

            <div className="studio-points">
              <div className="point-card">
                <span>01 / DETAIL</span>
                <h3>Precyzja w każdym pikselu.</h3>
                <p>
                  Dbamy o światło, kompozycję, hierarchię i detale,
                  które robią różnicę.
                </p>
                <div className="point-icon">
                  <Sparkles />
                </div>
              </div>

              <div className="point-card">
                <span>02 / IDENTITY</span>
                <h3>Jedna marka. Jeden język.</h3>
                <p>
                  Tworzymy spójny styl, dzięki któremu Twoje materiały
                  rozpoznaje się od razu.
                </p>
                <div className="point-icon">
                  <Layers3 />
                </div>
              </div>

              <div className="point-card">
                <span>03 / COLLAB</span>
                <h3>Partnerstwo, nie taśma.</h3>
                <p>
                  Rozmawiamy, dopracowujemy kierunek i szukamy
                  najlepszego rozwiązania.
                </p>
                <div className="point-icon">
                  <MessageCircle />
                </div>
              </div>

              <div className="point-card">
                <span>04 / IMPACT</span>
                <h3>Projekt z konkretnym celem.</h3>
                <p>
                  Każdy element ma swoją funkcję — od pierwszego
                  spojrzenia po finalny odbiór.
                </p>
                <div className="point-icon">
                  <MoveUpRight />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            <div>
              <strong>
                01<span>—</span>
              </strong>
              <small>INDYWIDUALNE PODEJŚCIE</small>
            </div>

            <div>
              <strong>∞</strong>
              <small>MOŻLIWOŚCI KREATYWNE</small>
            </div>

            <div>
              <strong>
                100<span>%</span>
              </strong>
              <small>UWAGI NA DETAL</small>
            </div>

            <div className="stats-note">
              Nie ścigamy się na liczby.
              <br />
              <b>Liczy się efekt.</b>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="uslugi" className="section services">
          <SectionHead
            eyebrow="WHAT WE DO / SERVICES"
            title={
              <>
                Wszystko, czego potrzebuje
                <br />
                <em>Twoja oprawa wizualna.</em>
              </>
            }
            copy="Od pojedynczego projektu po kompletny zestaw materiałów. Dobieramy zakres do skali i charakteru Twojej marki."
          />

          <div className="service-list">
            {services.map((s) => (
              <motion.div
                className="service-row"
                key={s.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="service-number">{s.no}</div>

                <div className="service-icon">
                  <s.icon />
                </div>

                <div className="service-main">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>

                  <div className="chips">
                    {s.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>

                <a
                  className="service-link"
                  href="#kontakt"
                  aria-label={`Zapytaj o usługę ${s.title}`}
                >
                  <ArrowUpRight />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="opinie" className="section testimonials">
          <SectionHead
            eyebrow="CLIENT WORDS / TRUST"
            title={
              <>
                Dobra współpraca.
                <br />
                <em>Jeszcze lepszy efekt.</em>
              </>
            }
            copy="Najlepszą wizytówką studia są projekty i ludzie, którzy za nimi stoją."
          />

          <div className="review-grid">
            {reviews.map((r, i) => (
              <motion.div
                className="review-card"
                key={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>

                <p>“{r.quote}”</p>

                <div className="review-author">
                  <div className="review-avatar">
                    {i === 0 ? 'V' : i === 1 ? 'N' : 'L'}
                  </div>

                  <div>
                    <b>{r.name}</b>
                    <small>{r.role}</small>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          <p className="demo-note">
            Przykładowe treści demonstracyjne — przed publikacją
            zastąp je autentycznymi opiniami klientów.
          </p>
        </section>

        {/* TEAM */}
        <section className="section team">
          <div className="team-card">
            <div className="team-copy">
              <span className="eyebrow">
                <i />
                THE PEOPLE BEHIND THE PIXELS
              </span>

              <h2>
                Kreatywność ma
                <br />
                <em>swoją tożsamość.</em>
              </h2>

              <p>
                LunexFX to niezależne studio skupione na jakości,
                estetyce i dobrym procesie. Zespół oraz role możesz
                przedstawić tutaj, gdy uzupełnisz skład.
              </p>

              <a href="#kontakt" className="text-link">
                Poznajmy się <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="team-visual">
              <div className="team-ring ring-a" />
              <div className="team-ring ring-b" />

              <div className="team-logo">
                <img src="/lunexfx-logo.png" alt="LunexFX" />
              </div>

              <div className="team-caption cap-a">
                CREATIVE
                <br />
                DIRECTION
              </div>

              <div className="team-caption cap-b">
                MINECRAFT
                <br />
                VISUALS
              </div>

              <div className="team-caption cap-c">
                EST. 2026
              </div>
            </div>
          </div>
        </section>

        {/* DISCORD COMMUNITY */}
        <section className="community">
          <div className="community-bg" />

          <div className="community-inner">
            <div className="community-icon">
              <MessageCircle size={27} />
            </div>

            <span className="eyebrow">
              LET’S BUILD SOMETHING
            </span>

            <h2>
              Twój następny projekt
              <br />
              zaczyna się <em>tutaj.</em>
            </h2>

            <p>
              Masz pomysł na serwer, kanał lub gamingową markę?
              Napisz do nas. Porozmawiajmy o tym, jak nadać mu
              wyjątkowy wygląd.
            </p>

            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Dołącz / napisz na Discordzie{' '}
              <ArrowUpRight size={17} />
            </a>

            <small className="community-hint">
              
            </small>
          </div>

          <div className="community-side">
            LUNEXFX
            <br />
            <span>CREATIVE STUDIO</span>
            <b>LF.</b>
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="section contact">
          <div className="contact-left">
            <span className="eyebrow">
              <i />
              START A PROJECT
            </span>

            <h2>
              Masz wizję?
              <br />
              <em>Zróbmy ją realną.</em>
            </h2>

            <p>
              Opowiedz nam o swoim projekcie. Wrócimy z pomysłem
              na kierunek, który będzie pasował do Twojej marki.
            </p>

            <a
              className="contact-email"
              href="mailto:lunexfx@interia.pl"
            >
              lunexfx@interia.pl <ArrowUpRight size={18} />
            </a>

            <span className="contact-note">
            </span>
          </div>

          <div className="contact-panel">
            <div className="panel-top">
              <span>PROJECT INQUIRY / 001</span>
              <span>
                OPEN FOR IDEAS <i />
              </span>
            </div>

            <div className="panel-symbol">
              <img src="/lunexfx-logo.png" alt="LunexFX logo" />
            </div>

            <h3>
 Zamieńmy pomysł
 <br />
 w rzeczywistość.
</h3>

            <p>Grafika • Branding • Minecraft visuals</p>

            <a
              href="https://discord.gg/eVVX9M5nd"
              target="_blank"
              rel="noreferrer"
            >
              ROZPOCZNIJ ROZMOWĘ <ArrowUpRight size={15} />
            </a>

            <div className="panel-coordinates">
              50°N 20°E — LUNEXFX STUDIO
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <img src="/lunexfx-logo.png" alt="LunexFX logo" />
            <span>
              LUNEX<span>FX</span>
            </span>
          </a>

          <p>
            Visuals beyond the ordinary.
            <br />
            PREMIUM MINECRAFT DESIGN.
          </p>

          <div className="footer-social">
            <a
              href="https://discord.gg/eVVX9M5nd"
              aria-label="Discord"
            >
              <MessageCircle />
            </a>

            <a
  href="https://www.tiktok.com/@lunexfxx"
  target="_blank"
  rel="noreferrer"
  aria-label="TikTok"
>
  <Music2 />
</a>

            <a
              href="https://www.youtube.com/@lunexxfx"
              aria-label="YouTube"
            >
              <Youtube />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 LUNEXFX STUDIO. ALL RIGHTS RESERVED.
          </span>

          <div>
            <a href="#top">BACK TO TOP ↑</a>
            <span>DESIGNED IN THE DARK.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
