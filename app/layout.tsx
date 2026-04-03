import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "East End Plumbers",
  description: "East London's trusted plumbing and heating experts - available 24/7 for emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
