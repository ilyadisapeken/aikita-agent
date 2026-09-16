export const metadata = {
  title: "AIKita Agent",
  description: "AI Agent untuk membantu pekerjaan bisnis dan UMKM"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
