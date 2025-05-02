import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact us" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: isHovered ? 9999 : 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(1rem, 2vw, 2rem) clamp(1rem, 5vw, 8rem)",
        background: isHovered ? "#ffffff" : (isAboutPage ? "transparent" : (isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent")),
        color: isHovered ? "#333" : "#fff",
        boxShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.1)" : (isScrolled && !isAboutPage ? "0 2px 4px rgba(0,0,0,0.1)" : "none"),
        transition: "all 0.3s ease"
      }}>
      <NavLink 
        to="/"
        style={{ 
          fontSize: "clamp(1.5rem, 2vw, 2rem)", 
          fontWeight: "bold",
          color: isHovered ? "#333" : "#fff",
          transition: "color 0.3s ease",
          textDecoration: "none"
        }}>
        AdVantage AI
      </NavLink>
      <nav>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              margin: "0 clamp(0.5rem, 1vw, 1rem)",
              color: isHovered ? "#333" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              position: "relative",
              padding: "0.3rem 0",
              transition: "color 0.3s ease",
              '&:hover': {
                opacity: 0.7
              },
              '&:after': isActive ? {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: isHovered ? "#333" : "#fff",
                transition: "background-color 0.3s ease"
              } : {}
            })}
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;