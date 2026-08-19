import { useState } from "react";

// Header menerima props: logo (teks) dan links (array navigasi)
export default function Header({ logo, links }) {
  // State: apakah kursor sedang hover di logo?
  const [isHovered, setIsHovered] = useState(false);

  const headerStyle = {
    width: "100%",
  };
  const containerStyle = {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  // Warna logo berubah tergantung state isHovered
  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: isHovered ? "#FF6B00" : "#00A8FF",
    cursor: "pointer",
    transition: "color 0.3s",
  };
  const navStyle = {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
  };
  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    background: "#00A8FF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo dari props + state hover untuk ubah warna */}
        <div
          style={logoStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {logo}
        </div>
        {/* Navigasi dari props (map array) */}
        <ul style={navStyle}>
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} style={linkStyle}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <button style={buttonStyle}>Login</button>
      </div>
    </header>
  );
}
