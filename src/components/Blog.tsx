import { Link } from 'react-router-dom';

const blogHeader = {
  image: "/images/blog.jpg",
  title: "Blog"
};

const blogPosts = [
  {
    category: "Automation",
    title: "Automating Meta Ads: A Complete Guide to Scaling Your Social Media Presence",
    readTime: "5 min",
    image: "/images/blog_meta.jpg",
    link: "/blog/meta-ads"
  },
  {
    category: "Development",
    title: "Building Task-Specific Chatbots with RAG: The Future of Customer Service",
    readTime: "6 min",
    image: "/images/blog_customer_service.jpg",
    link: "/blog/chatbot"
  }
];

function Blog() {
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
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${blogHeader.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "80px",
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
              fontWeight: "normal"
            }}>{blogHeader.title}</h1>
          </div>
        </div>
      </section>

      <section style={{ 
        padding: "80px 40px",
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        gap: "60px"
      }}>
        {blogPosts.map((post, index) => (
          <div key={index} style={{
            background: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
          }}>
            <img 
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "40px" }}>
              <div style={{
                fontSize: "1.1rem",
                color: "#666",
                marginBottom: "16px"
              }}>{post.category}</div>
              <h2 style={{
                fontSize: "2rem",
                marginBottom: "24px",
                lineHeight: "1.3"
              }}>{post.title}</h2>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "32px"
              }}>
                <Link 
                  to={post.link}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  Learn more →
                </Link>
                <span style={{ color: "#666", fontSize: "1.1rem" }}>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;