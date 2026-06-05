import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denana Social Growth OS",
  description:
    "Aplikasi internal untuk merencanakan konten sosial media DenanavBeauty Salon.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
