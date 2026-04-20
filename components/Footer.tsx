export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-name">Joshua John L. Cabunilas</div>
        <div className="footer-sub">
          Software Engineer · Flutter · .NET · Next.js &nbsp;|&nbsp;{" "}
          <a href="mailto:joshuacabunilas20@gmail.com" style={{ color: "var(--accent-2)" }}>
            joshuacabunilas20@gmail.com
          </a>
        </div>
        <div className="footer-sub" style={{ marginTop: 6 }}>
          © {new Date().getFullYear()} · Built with Next.js · Deployed on Vercel
        </div>
      </div>
    </footer>
  );
}
