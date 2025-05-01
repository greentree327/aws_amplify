import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogMetaAds from "./components/BlogMetaAds";
import BlogChatbot from "./components/BlogChatbot";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Customers from "./components/Customers";

function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        maxWidth: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        <Header />
        <main style={{ flex: 1, width: '100vw', overflow: 'hidden' }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Features />
                  <Customers />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/meta-ads" element={<BlogMetaAds />} />
            <Route path="/blog/chatbot" element={<BlogChatbot />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;