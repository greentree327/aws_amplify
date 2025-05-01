import { Link } from 'react-router-dom';

const features = [
  {
    title: "Automated Messaging & Task-Specific Chatbots",
    description: "Leverage AI to automate sending messages and deploy chatbots tailored to specific tasks."
  },
  {
    title: "Meta Ad Deployment",
    description: "Automatically place and manage advertisements on Meta platforms, streamlining campaign execution and maximizing reach."
  },
  {
    title: "Unified Analytics Dashboard",
    description: "Use AI to generate effective advertisements automatically, saving time and ensuring high-quality content."
  },
];

function Features() {
  return (
    <section id="features" style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "4rem 2rem",
      background: "#f8f8f8"
    }}>
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "4rem",
        fontSize: "2.5rem",
        color: "#333"
      }}>
        Showcasing some of the AI-powered solutions we have implemented
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            flex: 1,
            width: "350px",
            height: "400px",
            padding: "3rem 2rem",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            position: "relative"
          }}>
            <h3 style={{ 
              fontSize: "1.75rem",
              color: "#333",
              marginBottom: "1.5rem"
            }}>{feature.title}</h3>
            <p style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              flex: 1
            }}>{feature.description}</p>
            <Link 
              to="/contact" 
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                marginTop: "auto"
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;