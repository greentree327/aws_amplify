const productSlide = {
  image: "/images/slide2.png",
  title: "Our Product"
};

function Product() {
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
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${productSlide.image})`,
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
            }}>{productSlide.title}</h1>
          </div>
        </div>
      </section>

      <section id="product" style={{ padding: "50px 20px", background: "#f9f9f9" }}>
        <p>Discover the features and benefits of our AI-powered platform:</p>
        <ul>
          <li>Automated workflows</li>
          <li>Real-time analytics</li>
          <li>Seamless integrations</li>
        </ul>
      </section>
    </div>
  );
}

export default Product;