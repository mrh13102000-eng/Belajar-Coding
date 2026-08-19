import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  // Data yang dikirim ke Header lewat props
  const logo = "WEBKU";
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Portfolio", href: "#portfolio" },
  ];

  // Data yang dikirim ke Hero lewat props
  const heroTitle = "Learn Anywhere, Anytime";
  const heroSubtitle =
    "Join thousands of learners on our online platform. Explore interactive courses, expert-led classes, and hands-on projects designed to boost your skills.";
  const heroImage = "terminal.png";

  // Data yang dikirim ke Content lewat props
  const features = [
    {
      title: "Expert-Led Classes",
      description:
        "Learn from industry professionals with years of real-world experience.",
    },
    {
      title: "Hands-On Projects",
      description:
        "Build practical skills through engaging, project-based coursework.",
    },
    {
      title: "Flexible Schedule",
      description:
        "Access lessons anytime, anywhere, and learn at your own pace.",
    },
  ];

  // Data yang dikirim ke Footer lewat props
  const companyName = "WEBKU";

  // State: jumlah like — bisa berubah saat user menekan tombol like
  const [like, setLike] = useState(0);

  return (
    <>
      <div className="section">
        <Header logo={logo} links={navLinks} />
        <Hero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
      </div>

      {/* Bagian like counter — menampilkan state yang bisa berubah */}
      <div style={{ textAlign: "center", padding: "20px", background: "#fff" }}>
        <p style={{ fontSize: "1.125rem", color: "#333" }}>
          Suka dengan platform ini? 👍
        </p>
        <button
          onClick={() => setLike(like + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            background: "#00A8FF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Like ({like})
        </button>
      </div>

      <Content features={features} />
      <Footer companyName={companyName} />
    </>
  );
}

export default App;
