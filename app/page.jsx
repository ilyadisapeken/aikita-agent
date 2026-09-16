export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f7fb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        width: "100%",
        maxWidth: "700px",
        background: "white",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>
        <div style={{
          fontSize: "14px",
          fontWeight: "bold",
          color: "#2563eb",
          marginBottom: "10px"
        }}>
          AIKITA AGENT
        </div>

        <h1 style={{
          fontSize: "32px",
          margin: "0 0 12px"
        }}>
          AI Agent untuk Membantu Bisnis Anda
        </h1>

        <p style={{
          color: "#64748b",
          lineHeight: "1.6"
        }}>
          AIKita Agent akan membantu membuat konten,
          strategi marketing, dan berbagai pekerjaan bisnis
          menggunakan kecerdasan buatan.
        </p>

        <div style={{
          marginTop: "25px",
          padding: "18px",
          background: "#f8fafc",
          borderRadius: "14px"
        }}>
          <textarea
            placeholder="Tulis pekerjaan yang ingin dilakukan AI Agent..."
            rows="5"
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "14px",
              fontSize: "16px",
              resize: "vertical"
            }}
          />

          <button style={{
            marginTop: "12px",
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold"
          }}>
            Jalankan AI Agent
          </button>
        </div>
      </section>
    </main>
  );
}
