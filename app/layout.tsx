import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title: "t", description: "t" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-charcoal text-steel-silver">
        <Nav /><main className="flex-1">{children}</main><Footer />
      </body>
    </html>
  );
}
