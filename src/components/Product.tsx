const blogHeader = {
  image: "/images/blog.jpg",
  title: "The freshest industry news\npowered by Flowpark"
};

const blogPosts = [
  {
    category: "Automation",
    title: "Automating Meta Ads: A Complete Guide to Scaling Your Social Media Presence",
    readTime: "12 min",
    image: "/images/slide2-1.png"
  },
  {
    category: "Development",
    title: "Building Task-Specific Chatbots with RAG: The Future of Customer Service",
    readTime: "12 min",
    image: "/images/slide2-2.png"
  }
];

function Blog() {
  return (
    <div>
      <section style={{
        position: "relative",
        height: "50vh",
        width: "100%",
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
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${blogHeader.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}>
          <div style={{
            maxWidth: "1200px",
            width: "100%",
            padding: "0 20px",
            textAlign: "center"
          }}>
            <h1 style={{
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              whiteSpace: "pre-line",
              fontWeight: "bold"
            }}>{blogHeader.title}</h1>
          </div>
        </div>
      </section>

      <section style={{ 
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px"
      }}>
        {blogPosts.map((post, index) => (
          <div key={index} style={{
            background: "white",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <img 
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "24px" }}>
              <div style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "12px"
              }}>{post.category}</div>
              <h2 style={{
                fontSize: "1.5rem",
                marginBottom: "16px",
                lineHeight: "1.3"
              }}>{post.title}</h2>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "24px"
              }}>
                <a href="#" style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center"
                }}>
                  Learn more →
                </a>
                <span style={{ color: "#666" }}>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;