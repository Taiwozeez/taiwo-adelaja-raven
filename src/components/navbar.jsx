"use client"
import { Menu, Globe, LogOut } from "lucide-react"
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src="/images/Logomark.png" alt="Sisyphus Logo" className="logo-icon" width="24" height="24" />
            <span className="logo-text">Sisyphus</span>
          </div>
          {!isMobile && (
            <>
              <div className="vertical-divider"></div>
              <ul className="nav-links">
                <li>Exchange</li>
                <li>Wallets</li>
                <li>Roqqu Hub</li>
              </ul>
            </>
          )}
        </div>

        <div className="navbar-right">
          {isMobile && (
            <div className="profile">
              <img src="https://i.pravatar.cc/30?img=1" alt="User avatar" className="avatar" />
            </div>
          )}
          {!isMobile && (
            <div className="profile">
              <img src="https://i.pravatar.cc/30?img=1" alt="User avatar" className="avatar" />
              <span className="username">Olakunle Te...</span>
              <span className="arrow">›</span>
            </div>
          )}
          <div className="icon globe">
            <Globe size={20} />
          </div>
          {isMobile ? (
            <div className="icon hamburger" onClick={toggleMenu}>
              <Menu size={20} />
            </div>
          ) : (
            <div className="icon">
              <LogOut size={20} />
            </div>
          )}
        </div>
      </nav>
      <div className="horizontal-divider"></div>
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
            <div className="mobile-menu">
                <ul className="mobile-nav-links">
                    <li>Exchange</li>
                    <li>Wallets</li>
                    <li>Roqqu Hub</li>
                    <li>
                        <div className="profile">
                            <span className="username">Olakunle Te...</span>
                            <span className="arrow">›</span>
                        </div>
                    </li>
                    <li>
                        <LogOut size={20}/> Log out
                    </li>
                </ul>
            </div>
        )}
    </>
  )
}

export default Navbar