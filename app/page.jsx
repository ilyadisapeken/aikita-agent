"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function runAgent() {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch(
        "https://aikita-agent.ilyadisapeken.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setAnswer(data.answer);
      } else {
        setAnswer(
          "Maaf, AIKita mengalami masalah: " +
            (data.error || "Terjadi kesalahan.")
        );
      }
    } catch (error) {
      setAnswer(
        "Tidak dapat menghubungi AIKita Agent. Periksa koneksi internet atau Worker."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #eef2ff 100%)",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "30px",
              background: "#dbeafe",
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            AIKITA AGENT
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 7vw, 48px)",
              margin: "15px 0 10px",
              color: "#0f172a",
            }}
          >
            Asisten AI untuk Bisnis
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            Bantu pekerjaan bisnis, marketing, konten,
            dan UMKM dengan AI.
          </p>
        </div>

        <section
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "20px",
            boxShadow: "0 15px 45px rgba(15, 23, 42, 0.10)",
            border: "1px solid #e2e8f0",
          }}
        >
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              color: "#334155",
              marginBottom: "10px",
            }}
          >
            Apa yang ingin kamu kerjakan?
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                runAgent();
              }
            }}
            placeholder="Contoh: Buatkan 5 ide konten TikTok untuk jualan makanan..."
            rows={6}
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid #cbd5e1",
              borderRadius: "14px",
              padding: "15px",
              fontSize: "16px",
              lineHeight: "1.5",
              resize: "vertical",
              outline: "none",
            }}
          />

          <button
            onClick={runAgent}
            disabled={loading || !prompt.trim()}
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background:
                loading || !prompt.trim()
                  ? "#94a3b8"
                  : "#2563eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor:
                loading || !prompt.trim()
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {loading
              ? "AIKita sedang bekerja..."
              : "Jalankan AI Agent"}
          </button>

          {answer && (
            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                background: "#f8fafc",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                🤖 AIKita Agent
              </div>

              <div
                style={{
                  color: "#334155",
                  lineHeight: "1.7",
                  whiteSpace: "pre-wrap",
                }}
              >
                {answer}
              </div>
            </div>
          )}
        </section>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "13px",
            marginTop: "20px",
          }}
        >
          AIKita Agent • Dibuat untuk membantu bisnis dan UMKM
        </p>
      </div>
    </main>
  );
}
