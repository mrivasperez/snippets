import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Snippets",
  description: "Manage your code snippets."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
