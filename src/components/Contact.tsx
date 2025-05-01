import { useState } from 'react';

const contactSlide = {
  image: "/images/Contact_us.png",
  title: "Contact us"
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessType: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
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
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${contactSlide.image})`,
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
            }}>{contactSlide.title}</h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div style={{
        display: "flex",
        minHeight: "calc(100vh - 50vh)"
      }}>
        {/* Left section - Contact Info */}
        <section style={{
          flex: 1,
          background: "#fff",
          padding: "40px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
           
            {/* Single Contact Information */}
            <div style={{
              marginTop: "40px",
              marginLeft: "100px",
              maxWidth: "800px"
            }}>
              <div>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  color: "#666",
                  marginBottom: "16px",
                  fontWeight: "normal"
                }}>General enquiries</h3>
                <a href="mailto:evoncapitalorg@gmail.com" 
                   style={{ 
                     color: "#000",
                     textDecoration: "none",
                     fontSize: "1.4rem",
                     display: "block",
                     fontWeight: "normal"
                   }}>
                  evoncapitalorg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px"
          }}>
            <a href="https://twitter.com/prescientai" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/prescientai" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Right section - Demo Form */}
        <section style={{
          flex: 1,
          padding: "80px 40px",
          background: "#fff"
        }}>
          <div style={{
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              color: "#000"
            }}>
              Book a demo
            </h2>
            <p style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "#666"
            }}>
              See how our AI-powered messaging bots and automated ad campaigns can grow your business. Get a personalized demo and start automating in minutes.
            </p>

            <form onSubmit={handleSubmit} style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem"
            }}>
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333"
                }}>
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px"
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333"
                }}>
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px"
                  }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333"
                }}>
                  Email*
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px"
                  }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333"
                }}>
                  Business Type*
                </label>
                <select
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: "#fff"
                  }}
                >
                  <option value="">e.g. Brand, Agency, Aggregator</option>
                  <option value="brand">Brand</option>
                  <option value="agency">Agency</option>
                  <option value="aggregator">Aggregator</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333"
                }}>
                  Brand/Agency Website URL*
                </label>
                <input
                  type="url"
                  placeholder="yourcompany.com"
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px"
                  }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <button
                  type="submit"
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1rem",
                    backgroundColor: "#005E66",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%"
                  }}
                >
                  Book a Demo
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;