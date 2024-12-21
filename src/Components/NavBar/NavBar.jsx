import  { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">logo</a>

      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/" onClick={() => setIsOpen(false)}>About</a>
        <a href="/" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="/" onClick={() => setIsOpen(false)}>Services</a>
        <a href="/" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
