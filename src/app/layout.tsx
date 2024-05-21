import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirav Private Bali Villa Uluwatu",
  description: "Best Private Bali Villa in Uluwatu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  );
}
