import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Giới Thiệu', href: '#gioi-thieu' },
  { label: 'Khóa Học', href: '#khoa-hoc' },
  { label: 'Chi Nhánh', href: '#chi-nhanh' },
  { label: 'Thư Viện', href: '#thu-vien' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-red/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-16 py-3 sm:py-4">
        {/* 3-column grid: logo | centered nav | CTA */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: logo + name */}
          <div className="flex items-center gap-3 justify-self-start">
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789008137/logo-removebg-preview.png"
              alt="ThanhMai HSK Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-lg"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg sm:text-xl font-bold text-brand-ivory tracking-wide">
                ThanhMai HSK
              </span>
              <span className="font-script italic text-xs sm:text-sm text-brand-gold tracking-wide">
                Trung tâm tiếng Trung
              </span>
            </div>
          </div>

          {/* Center: nav links + phone */}
          <nav className="hidden lg:flex items-center gap-8 justify-self-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white hover:text-[#FBC775] focus:text-[#FBC775] active:text-[#FBC775] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#FBC775] group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right: phone and CTA */}
          <div className="hidden lg:flex items-center gap-4 justify-self-end">
            <a
              href="tel:0398519485"
              className="flex items-center gap-2 font-sans text-sm text-white hover:text-[#FBC775] focus:text-[#FBC775] active:text-[#FBC775] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0398519485</span>
            </a>
            <a
              href="https://zalo.me/0398519485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-brand-gold text-brand-brown font-sans text-sm font-semibold hover:bg-brand-gold-deep hover:text-white transition-all duration-300 shadow-lg shadow-black/20 hover:-translate-y-0.5"
            >
              Học Thử Miễn Phí
            </a>
          </div>

          {/* Mobile toggle (right column on small screens) */}
          <button
            className="lg:hidden text-brand-gold p-1 justify-self-end"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-3 flex flex-col gap-1 bg-black/50 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-white hover:text-[#FBC775] focus:text-[#FBC775] active:text-[#FBC775] transition-colors duration-200 py-2.5 border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0398519485"
              className="flex items-center gap-2 font-sans text-sm text-white hover:text-[#FBC775] focus:text-[#FBC775] active:text-[#FBC775] transition-colors duration-200 py-2.5 border-b border-white/5"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0398519485</span>
            </a>
            <a
              href="https://zalo.me/0398519485"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-full bg-brand-gold text-brand-brown font-sans text-sm font-semibold text-center hover:bg-brand-gold-deep hover:text-white transition-all duration-300"
            >
              Học Thử Miễn Phí
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
