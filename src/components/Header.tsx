import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/product", label: "Product" },
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
        zIndex: isHovered ? 9999 : 1000, // Increase z-index on hover to ensure it's the top layer
        display: "flex",
        justifyContent: "space-between",
        alignItems: "left",
        padding: "30px 140px",
        background: isHovered ? "#ffffff" : (isAboutPage ? "transparent" : (isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent")),
        color: isHovered ? "#333" : "#fff",
        boxShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.1)" : (isScrolled && !isAboutPage ? "0 2px 4px rgba(0,0,0,0.1)" : "none"),
        transition: "all 0.3s ease"
      }}>
      <div style={{ 
        fontSize: "30px", 
        fontWeight: "bold",
        color: isHovered ? "#333" : "#fff",
        transition: "color 0.3s ease"
      }}>AdVantage AI</div>
      <nav>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              margin: "0 15px",
              color: isHovered ? "#333" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: "18px",
              position: "relative",
              padding: "5px 0",
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