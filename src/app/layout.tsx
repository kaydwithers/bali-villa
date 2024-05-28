import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="bg-primary">
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  );
}
