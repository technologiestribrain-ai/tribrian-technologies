import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 20px" }}>
      <div className="section-wrap" style={{ maxWidth: "600px" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="eyebrow-line" /> 404 ERROR
        </div>
        <h1 style={{ margin: "24px 0 16px", fontSize: "clamp(42px, 6vw, 68px)", fontWeight: 750, letterSpacing: "-0.05em" }}>
          Page <span>not found</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link href="/" className="button button-dark" style={{ textDecoration: "none" }}>
          <ArrowLeft size={17} /> Return Home
        </Link>
      </div>
    </main>
  );
}
