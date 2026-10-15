import { navigationItems } from '../data/portfolioData'

function Header({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          Portfolio<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navigationItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span>&#8599;</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
