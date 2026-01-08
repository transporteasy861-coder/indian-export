import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indian Export Import Services - Global Logistics Solutions",
  description: "From local to global shipments, our seamless logistics solutions ensure on-time, secure, and hassle-free delivery. Expert export and import services across 150+ countries.",
  keywords: "export, import, logistics, shipping, international trade, supply chain, freight forwarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
