import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/global-components/navigation";
import Footer from "@/components/global-components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gym.tylerlatshaw.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Raise the Bar",
    default: "Raise the Bar | Weight Lifting Tracking",
  },
  description: "Raise the Bar",
  generator: "Next.js",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Tyler Latshaw", url: "https://tylerlatshaw.com/" }],
  creator: "Tyler J. Latshaw",
  publisher: "Tyler J. Latshaw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="leading-normal tracking-normal bg-cover bg-fixed min-h-screen" suppressHydrationWarning={true}>
        <Navigation />
        <main className="m-2 mt-20 md:m-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}