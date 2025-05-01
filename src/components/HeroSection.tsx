import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/images/slide1.jpg",
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
      width: "100vw",
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
            width: "100vw",
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
            maxWidth: "800px",
            width: "100%",
            padding: "0 8%",
          }}>
            <h1 style={{ 
              fontSize: "4.5rem", 
              marginBottom: "1.5rem",
              textAlign: "left",
              lineHeight: "1.1",
              whiteSpace: "pre-line" // This ensures \n creates new lines
            }}>{slide.title}</h1>
            <p style={{ 
              fontSize: "1.5rem", 
              marginBottom: "2.5rem",
              textAlign: "left",
              lineHeight: "1.4",
              maxWidth: "600px" // Control line length for readability
            }}>{slide.description}</p>
            <div style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center"
            }}>
              <button 
                onClick={() => navigate('/contact')}
                style={{
                  padding: "15px 30px",
                  fontSize: "16px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
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
        bottom: "20px",
        left: "8%",
        display: "flex",
        gap: "10px"
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index === currentSlide ? "#fff" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer"
            }}
          />
        ))}
      </div>

      <button
        onClick={scrollToFeatures}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "10px",
          animation: "bounce 2s infinite",
          zIndex: 10
        }}
        aria-label="Scroll to Features"
      >
        <svg 
          width="40" 
          height="40" 
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