const Customers = () => {
  const customerBoxStyle = {
    flex: '0 1 250px',
    margin: '1rem',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const containerStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5',
  };

  const boxesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap' as const,
    gap: '2rem',
  };

  const mainHeadingStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const logoStyle = {
    width: '150px',
    height: '150px', // Fixed height to ensure consistency
    margin: '0 auto 1rem',
    objectFit: 'contain' as const, // Ensures logo fits within dimensions while maintaining aspect ratio
  };

  return (
    <section style={containerStyle}>
      <h2 style={mainHeadingStyle}>Trusted by our Partners</h2>
      <div style={boxesContainerStyle}>
        <div style={customerBoxStyle}>
          <img src="/images/hkstp-logo.png" alt="Hong Kong Science Park Logo" style={logoStyle} />
          <h3>Hong Kong Science Park</h3>
        </div>
        <div style={customerBoxStyle}>
          <img src="/images/hku-logo.png" alt="The University of Hong Kong Logo" style={logoStyle} />
          <h3>The University of Hong Kong</h3>
        </div>
        <div style={customerBoxStyle}>
          <img src="/images/cuhk-logo.png" alt="The Chinese University of Hong Kong Logo" style={logoStyle} />
          <h3>The Chinese University of Hong Kong</h3>
        </div>
      </div>
    </section>
  );
};

export default Customers;