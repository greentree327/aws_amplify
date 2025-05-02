import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/images/slide1-1.jpg",
    title: "Take Advantage\nof AI",
    description: "Unlock new opportunities with advanced analytics."
  },
  {
    image: "/images/slide2-2.png",
    title: "Take Advantage\nof AI",
    description: "Smarter Conversations. Effortless Ads. All Automated."
  },
  {
    image: "/images/slide3-1.png",
    title: "Take Advantage\nof AI",
    description: "Smarter Conversations. Effortless Ads. All Automated."
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "#000",
    }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div style={{
            maxWidth: "var(--content-width)",
            width: "100%",
            margin: "0",
            paddingLeft: "clamp(2rem, 5vw, 6rem)",
            paddingRight: "clamp(1rem, 3vw, 3rem)",
          }}>
            <h1 style={{ 
              fontSize: "var(--heading-font-size)",
              marginBottom: "clamp(1rem, 2vw, 2rem)",
              textAlign: "left",
              lineHeight: 1.1,
              whiteSpace: "pre-line"
            }}>{slide.title}</h1>
            <p style={{ 
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)", 
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              textAlign: "left",
              lineHeight: 1.4,
              maxWidth: "min(600px, 90%)"
            }}>{slide.description}</p>
            <div style={{
              display: "flex",
              gap: "var(--spacing-unit)",
              alignItems: "center"
            }}>
              <button 
                onClick={() => navigate('/contact')}
                style={{
                  padding: "clamp(0.8rem, 1.5vw, 1rem) clamp(1.5rem, 2vw, 2rem)",
                  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "0.3rem",
                  cursor: "pointer"
                }}>
                Our Solutions
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div style={{
        position: "absolute",
        bottom: "var(--spacing-unit)",
        left: "8%",
        display: "flex",
        gap: "0.5rem"
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "clamp(8px, 0.75vw, 12px)",
              height: "clamp(8px, 0.75vw, 12px)",
              minWidth: "8px",
              minHeight: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentSlide ? "#fff" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          />
        ))}
      </div>

      <button
        onClick={scrollToFeatures}
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 3vw, 2.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0.6rem",
          animation: "bounce 2s infinite",
          zIndex: 10
        }}
        aria-label="Scroll to Features"
      >
        <svg 
          width="clamp(24px, 2.5vw, 40px)" 
          height="clamp(24px, 2.5vw, 40px)" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </button>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-20px);
            }
            60% {
              transform: translateX(-50%) translateY(-10px);
            }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;