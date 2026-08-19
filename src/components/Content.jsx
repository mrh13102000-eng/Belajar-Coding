import { useState } from "react";

// Content menerima props: features (array objek)
export default function Content({ features }) {
  // State: apakah semua kartu sedang ditampilkan?
  const [showAll, setShowAll] = useState(true);

  const mainStyle = {
    width: "100%",
    background: "#fff",
    padding: "60px 0",
  };
  const containerStyle = {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    gap: "24px",
  };
  const featureStyle = {
    background: "#fff",
    flex: 1,
    padding: "24px",
  };
  const titleStyle = {
    fontSize: "1.25rem",
    margin: "0 0 12px",
    color: "#222",
    textAlign: "center",
  };
  const descStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    margin: 0,
    color: "#555",
    textAlign: "center",
  };
  const toggleBtnStyle = {
    display: "block",
    margin: "0 auto 30px",
    padding: "10px 20px",
    fontSize: "1rem",
    background: "#00A8FF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  // Jika showAll false, hanya tampilkan 2 kartu pertama
  const visibleFeatures = showAll ? features : features.slice(0, 2);

  return (
    <main style={mainStyle}>
      {/* Tombol toggle — mengubah state showAll */}
      <button
        style={toggleBtnStyle}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Sembunyikan" : "Lihat Semua"}
      </button>

      <div style={containerStyle}>
        {/* Map dari props, bukan dari data hardcode */}
        {visibleFeatures.map((feature, idx) => (
          <div key={idx} style={featureStyle}>
            <h3 style={titleStyle}>{feature.title}</h3>
            <p style={descStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
