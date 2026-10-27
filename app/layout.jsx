import "./globals.css";

export const metadata = {
  title: "TRIBRIAN TECHNOLOGIES | Software That Moves You Forward",
  description:
    "TRIBRIAN TECHNOLOGIES helps businesses build dependable software, modern APIs, cloud-ready applications, and quality-driven digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
