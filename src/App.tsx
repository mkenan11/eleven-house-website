import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Instagram,
  Menu,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Play,
  Star,
  Trophy,
  Utensils,
  X,
} from 'lucide-react';

const whatsappUrl = 'https://wa.me/994504747501?text=Salam%2C%20Eleven%20House.%20Rezervasiya%20etm%C9%99k%20ist%C9%99yir%C9%99m.%20Z%C9%99hm%C9%99t%20olmasa%2C%20uy%C4%9Funluq%20bar%C9%99d%C9%99%20m%C9%99lumat%20ver%C9%99%20bil%C9%99rsiniz%3F';
const menuUrl = 'https://11menu.vercel.app';
const instagramUrl = 'https://www.instagram.com/e11even.house/';
const facebookUrl = 'https://www.facebook.com/people/Eleven-House/61593099560748/';
const tiktokUrl = 'https://www.tiktok.com/@e11even.house_';
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Eleven+House%2C+142+Əlövsət+Quliyev%2C+Bakı';

const primaryPhone = '+994 50 474 75 01';
const primaryPhoneTel = 'tel:+994504747501';
const secondaryPhone = '050 388 38 62';
const secondaryPhoneTel = 'tel:+994503883862';

const navItems = [
  { label: 'Ana səhifə', href: '#top' },
  { label: 'Tədbirlər', href: '#whats-on' },
  { label: 'Təcrübə', href: '#experience' },
  { label: 'Menyu', href: '#menu' },
  { label: 'Qalereya', href: '#gallery' },
  { label: 'Əlaqə', href: '#visit' },
];

const experienceItems = [
  { number: '01', title: 'Canlı musiqi', text: 'Canlı ifalar və gecə enerjisi.', icon: Music2 },
  { number: '02', title: 'İdman gecələri', text: 'Oyunu öz insanlarınla izlə.', icon: Trophy },
  { number: '03', title: 'Film və xüsusi gecələr', text: 'Film gecələri, performanslar və xüsusi tədbirlər.', icon: Play },
  { number: '04', title: 'Yemək və içkilər', text: 'Kokteyllər, pivə və gecə üçün yemək.', icon: Utensils },
];

const menuItems = [
  { label: 'Burgerlər', detail: 'Aclı saatları üçün' },
  { label: 'Pizza', detail: 'Süfrə üçün' },
  { label: 'Kokteyllər', detail: 'Gecə buradan başlayır' },
  { label: 'Atışdırmalıqlar', detail: 'Bölüşmək üçün' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand-mark" href="#top" aria-label="Eleven House ana səhifə">
          <span className="brand-eleven">11</span>
          <span className="brand-name">ELEVEN <em>HOUSE</em></span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Əsas naviqasiya">
          <div className="mobile-nav-top">
            <span className="eyebrow">Naviqasiya</span>
            <button className="icon-button" onClick={closeMenu} aria-label="Menyunu bağla"><X size={22} /></button>
          </div>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-reserve mobile-reserve" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Rezervasiya et <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="header-actions">
          <a className="nav-reserve desktop-reserve" href={whatsappUrl} target="_blank" rel="noreferrer">Rezervasiya et <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Menyunu aç" aria-expanded={menuOpen}><Menu size={24} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media">
            <img src="/assets/images/experience/image.png" alt="Eleven House-da canlı musiqi ifaçısı səhnədə" fetchPriority="high" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <p className="eyebrow hero-eyebrow"><span /> Sahil · Bakı · 17:00—02:00</p>
            <h1 id="hero-title">Feel<br /><span>the 11</span></h1>
            <p className="hero-copy">Canlı musiqi, gecə həyatı,<br className="desktop-only" /> yaxşı şirkət.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Rezervasiya et <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href={menuUrl} target="_blank" rel="noreferrer">Menyuya bax <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <a href="#whats-on" aria-label="Tədbirlərə keç"><ArrowDownRight size={22} /></a>
          </div>
        </section>

        <section className="section whats-on page-width" id="whats-on" aria-labelledby="whats-on-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow accent-eyebrow">01 / Nələr var</p>
              <h2 id="whats-on-title">Hər axşam<br /><i>bir şey olur.</i></h2>
            </div>
            <p className="section-intro">Hekayəyə çevrilən gecələr üçün bir məkan. Canlı ifalar, film gecələri, idman və xüsusi tədbirlər üçün bizi izlə.</p>
          </div>
          <div className="event-feature">
            <div className="event-image image-frame"><img src="/assets/images/events/image.png" alt="Eleven House səhnəsi performans üçün hazırdır" loading="lazy" /></div>
            <div className="event-copy">
              <div className="event-label"><CalendarDays size={16} /> İndi Eleven-də</div>
              <h3>Bu gecəni<br /><i>öz gecən et.</i></h3>
              <p>Tədbir təqvimimiz Instagram-da yenilənir. Növbəti canlı ifa, film gecəsi və ya izləməyə dəyər bir oyun üçün bizi izlə.</p>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Nələr gəlir gör <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="experience-layout page-width">
            <div className="experience-image image-frame"><img src="/assets/images/gallery/image.png" alt="Eleven House neon işartısı və barda qonaq" loading="lazy" /></div>
            <div className="experience-content">
              <p className="eyebrow accent-eyebrow">02 / Təcrübə</p>
              <h2 id="experience-title">Sadəcə bir gecədən<br /><i>daha çox.</i></h2>
              <p className="section-intro">Eleven House — kiçik bir səhnə, gecəyarı bar və Bakının mərkəzində görüş yeri.</p>
              <div className="experience-list">
                {experienceItems.map(({ number, title, text, icon: Icon }) => (
                  <div className="experience-row" key={title}>
                    <span className="experience-number">{number}</span>
                    <Icon size={20} strokeWidth={1.5} />
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section menu-section page-width" id="menu" aria-labelledby="menu-title">
          <div className="menu-intro">
            <p className="eyebrow accent-eyebrow">03 / Yemək və içkilər</p>
            <h2 id="menu-title">11-i<br /><i>dad.</i></h2>
            <p className="section-intro">Atmosfer üçün gəl. Bölüşmək üçün bir şey, soyuq bir şey və bir raund daha üçün qal.</p>
            <a className="button button-outline" href={menuUrl} target="_blank" rel="noreferrer">Tam menyuya bax <ArrowUpRight size={17} /></a>
          </div>
          <div className="menu-visual image-frame"><img src="/assets/images/menu/image.png" alt="Eleven House-da isti işıqlı masalar" loading="lazy" /><span className="image-note">Süfrə sənindir.</span></div>
          <div className="menu-list">
            {menuItems.map((item, index) => (
              <a className="menu-row" href={menuUrl} target="_blank" rel="noreferrer" key={item.label}>
                <span className="menu-index">0{index + 1}</span><span className="menu-label">{item.label}</span><span className="menu-detail">{item.detail}</span><ChevronRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <section className="section gallery-section page-width" id="gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <p className="eyebrow accent-eyebrow">04 / Atmosfer</p>
            <h2 id="gallery-title">Eleven House-da<br /><i>gecə.</i></h2>
            <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> @e11even.house</a>
          </div>
          <div className="gallery-grid">
            <div className="gallery-image gallery-large image-frame"><img src="/assets/images/hero/image.png" alt="Mum işığında masalar və Eleven House səhnəsi" loading="lazy" /></div>
            <div className="gallery-image gallery-small image-frame"><img src="/assets/images/events/image.png" alt="Eleven House-da qırmızı pərdəli səhnə" loading="lazy" /></div>
            <div className="gallery-caption"><span className="quote-mark">“</span><p>Yaxşı gecələr yaxşı şirkətlə başlayır.</p><span className="caption-rule" /></div>
            <div className="gallery-image gallery-wide image-frame"><img src="/assets/images/gallery/image.png" alt="Barda yanan Eleven House neon işartısı" loading="lazy" /></div>
          </div>
        </section>

        <section className="review-band" aria-labelledby="reviews-title">
          <div className="page-width review-content">
            <div><p className="eyebrow accent-eyebrow">05 / Şəhərdə nə deyirlər</p><h2 id="reviews-title">İnsanlar<br /><i>nə deyir.</i></h2></div>
            <div className="rating"><div className="stars" aria-label="5-dən 4.8 ulduz"><Star fill="currentColor" size={19} /><Star fill="currentColor" size={19} /><Star fill="currentColor" size={19} /><Star fill="currentColor" size={19} /><Star fill="currentColor" size={19} /></div><strong>4.8</strong><span>Google-da<br />16 rəy</span></div>
            <a className="text-link light-link" href={mapsUrl} target="_blank" rel="noreferrer">Rəyləri oxu <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="visit-image"><img src="/assets/images/hero/image.png" alt="Eleven House-da isti işıqlı interyer" loading="lazy" /></div>
          <div className="visit-overlay" />
          <div className="page-width visit-content">
            <p className="eyebrow hero-eyebrow"><span /> 06 / Bizi tap</p>
            <h2 id="visit-title">Gecən<br /><i>buradan başlayır.</i></h2>
            <div className="visit-details">
              <div><MapPin size={18} /><p>142 Əlövsət Quliyev<br />Sahil / Tarqovu, Bakı, AZ1001</p></div>
              <div><Clock3 size={18} /><p>Hər gün<br />17:00 — 02:00</p></div>
            </div>
            <div className="visit-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Rezervasiya et</a>
              <a className="button button-quiet" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Xəritədə aç</a>
              <a className="button button-quiet" href={primaryPhoneTel}><Phone size={17} /> Zəng et</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <div className="footer-brand"><a className="brand-mark" href="#top"><span className="brand-eleven">11</span><span className="brand-name">ELEVEN <em>HOUSE</em></span></a><p>Feel the 11.</p></div>
          <div className="footer-column"><p className="footer-label">Keçid</p>{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
          <div className="footer-column"><p className="footer-label">Ünvan</p><a href={mapsUrl} target="_blank" rel="noreferrer">142 Əlövsət Quliyev,<br />Bakı, AZ1001</a><span>Hər gün · 17:00—02:00</span></div>
          <div className="footer-column">
            <p className="footer-label">Əlaqə</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp · {primaryPhone}</a>
            <a href={primaryPhoneTel}>{primaryPhone}</a>
            <a href={secondaryPhoneTel}>{secondaryPhone}</a>
          </div>
          <div className="footer-column">
            <p className="footer-label">Sosial</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer">TikTok ↗</a>
          </div>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Eleven House</span><span>Canlı musiqi · gecə həyatı · Bakı</span></div>
      </footer>

      <div className="mobile-sticky-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Rezervasiya et <ArrowUpRight size={16} /></a></div>
    </div>
  );
}

export default App;
