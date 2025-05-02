const Customers = () => {
  const customerBoxStyle = {
    flex: '0 0 250px', // Changed to non-shrinking, non-growing
    margin: '0', // Removed margin since we're using gap
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
    overflow: 'hidden', // Prevent container from scrolling
  };

  const boxesContainerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    gap: '4rem', // Increased from 2rem to 4rem
    padding: '0.5rem', // Add padding for scrollbar
    overflowX: 'auto' as const,
    scrollBehavior: 'smooth' as const,
    msOverflowStyle: 'none' as const,
    scrollbarWidth: 'none' as const,
  };

  const mainHeadingStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const logoStyle = {
    width: '150px',
    height: '150px',
    margin: '0 auto 1rem',
    objectFit: 'contain' as const,
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
        <div style={customerBoxStyle}>
          <img src="/images/nomura_logo.jpg" alt="Nomura Logo" style={logoStyle} />
          <h3>Nomura</h3>
        </div>
        <div style={customerBoxStyle}>
          <img src="/images/google_logo.png" alt="Google Logo" style={logoStyle} />
          <h3>Google</h3>
        </div>
        <div style={customerBoxStyle}>
          <img src="/images/Datality_Lab_Logo.png" alt="Datality Lab Logo" style={logoStyle} />
          <h3>Datality Lab</h3>
        </div>
        
      </div>
    </section>
  );
};

export default Customers;