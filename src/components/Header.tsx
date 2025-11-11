import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isApp = location.pathname.startsWith('/app')
  const isDocs = !isHome && !isApp

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/logo_tr_fit.png" alt="Cynclar Logo" className="logo-image" />
          <span className="logo-text">cynclar</span>
        </Link>
        <nav className="header-nav">
          <a href="https://pump.fun/coin/4ZnGxkACWwyj3LYaJzNv9bRa77LyZq2EdXVqmn5Mpump" target="_blank" rel="noopener noreferrer" className="nav-link">
            pump.fun
          </a>
          <a href="https://x.com/cynclardotcloud" target="_blank" rel="noopener noreferrer" className="nav-link">
            x
          </a>
          <Link to="/introduction/overview/what-is-cynclar" className={`nav-link ${isDocs ? 'active' : ''}`}>
            docs
          </Link>
          <Link to="/app" className={`nav-link ${isApp ? 'active' : ''}`}>
            app
          </Link>
        </nav>
      </div>
    </header>
  )
}


