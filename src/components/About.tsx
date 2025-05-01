const aboutSlide = {
  image: "/images/who_we_are.jpg",
  title: "Who we are"
};

function About() {
  return (
    <div>
      <section style={{
        position: "relative",
        height: "50vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#000",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "100%",
          margin: 0,
          padding: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${aboutSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end", // Changed from center to flex-end
          paddingBottom: "80px", // Added padding at the bottom
          color: "white",
        }}>
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
              whiteSpace: "pre-line",
              fontWeight: "normal" // Remove bold
            }}>{aboutSlide.title}</h1>
          </div>
        </div>
      </section>

      {/* About content sections */}
      <section style={{
        background: "transparent",
        color: "#000",
        padding: "80px 0"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 3%",
          padding: "0 5%"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "2rem"
          }}>
            About Us
          </h2>
          <div style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            maxWidth: "800px"
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              At AdVantage AI, we are pioneering the future of artificial intelligence solutions for businesses. Our team of dedicated experts combines cutting-edge technology with practical business applications to deliver transformative results.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Founded with a vision to make AI accessible and impactful, we've grown into a trusted partner for organizations seeking to leverage the power of artificial intelligence in their operations.
            </p>
            <p>
              Our commitment to innovation, excellence, and client success drives everything we do, from developing custom AI solutions to implementing automated workflows that streamline business processes.
            </p>
          </div>
        </div>
      </section>

      {/* What we value section */}
      <section style={{
        background: "transparent",
        padding: "80px 0"
      }}>
        <div style={{
          maxWidth: "1600px",
          margin: "0 3%",
          padding: "0 5%"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "#000"
          }}>
            What we value
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            color: "#000"
          }}>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Innovation First</h3>
              <p style={{ fontSize: "1.2rem" }}>By pioneering AI solutions that transform how businesses operate and compete in the digital age</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Client Success</h3>
              <p style={{ fontSize: "1.2rem" }}>By delivering measurable results and ensuring our solutions create real business value</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Technical Excellence</h3>
              <p style={{ fontSize: "1.2rem" }}>By maintaining the highest standards in AI development and implementation</p>
            </div>
            <div>
              <h3 style={{
                fontSize: "2.8rem",
                marginBottom: "1rem",
                fontWeight: "normal"
              }}>Ethical AI</h3>
              <p style={{ fontSize: "1.2rem" }}>By ensuring responsible AI development that prioritizes transparency and fairness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;