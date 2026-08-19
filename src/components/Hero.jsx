import { useState } from "react";

// Hero menerima props: title, subtitle, image
export default function Hero({ title, subtitle, image }) {
  // State: apakah tombol sedang diklik?
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi yang dijalankan saat tombol diklik
  const handleExplore = () => {
    setIsLoading(true);
    // Setelah 2 detik, kembali ke kondisi semula
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const heroStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1024px",
    margin: "auto",
    padding: "72px 16px",
  };
  const leftStyle = {
    flex: 1,
    paddingRight: "40px",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    margin: "0 0 20px",
    color: "#222",
  };
  const descStyle = {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    margin: "0 0 30px",
    color: "#555",
  };
  // Warna tombol berubah saat loading
  const exploreBtnStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    background: isLoading ? "#999" : "#00A8FF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: isLoading ? "not-allowed" : "pointer",
  };
  const rightStyle = {
    flex: 1,
    textAlign: "right",
  };
  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    width: 380,
  };

  return (
    <section style={heroStyle}>
      <div style={leftStyle}>
        {/* Data dari props, bukan hardcode */}
        <h1 style={titleStyle}>{title}</h1>
        <p style={descStyle}>{subtitle}</p>
        {/* Tombol dengan state: teks berubah saat loading */}
        <button style={exploreBtnStyle} onClick={handleExplore}>
          {isLoading ? "Memuat..." : "Explore Class"}
        </button>
      </div>
      <div style={rightStyle}>
        <img src={image} alt="Course preview" style={imgStyle} />
      </div>
    </section>
  );
}
