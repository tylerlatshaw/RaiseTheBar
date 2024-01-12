import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/global-components/navigation-client";
import Footer from "./../components/global-components/footer";

const description = "Raise the Bar is a weight-lifting tracker highlighting my progress at the gym. Witness my highs, lows, and gains as I track and share my lifting progress.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gym.tylerlatshaw.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Raise the Bar",
    default: "Raise the Bar | Weight Lifting Tracker",
  },
  description: description,
  generator: "Next.js",
  applicationName: "Raise the Bar",
  keywords: ["Tyler Latshaw", "Raise the Bar", "Weight Lifting"],
  authors: [{ name: "Tyler Latshaw", url: "https://tylerlatshaw.com/" }],
  creator: "Tyler J. Latshaw",
  publisher: "Tyler J. Latshaw",
  openGraph: {
    title: "Raise the Bar | Weight Lifting Tracker",
    description: description,
    url: "https://gym.tylerlatshaw.com/",
    siteName: "Raise the Bar",
    images: [{
      url: "https://gym.tylerlatshaw.com/static/raise-the-bar-meta-logo.png"
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raise the Bar | Weight Lifting Tracker",
    description: description,
    creator: "@tylerlatshaw",
    images: ["https://gym.tylerlatshaw.com/static/raise-the-bar-meta-logo.png"]
  }
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
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content="624859195499-7k5eus0o17cspl0a88dio2p67tla4tas.apps.googleusercontent.com" />
      </head>
      <body className="leading-normal tracking-normal bg-cover bg-fixed min-h-screen" suppressHydrationWarning={true}>
        <Navigation />
        <main className="mt-20 mb-3 mx-3 md:mx-12 md:my-3 lg:mx-20 lg:my-3 xl:mx-30 xl:my-3 bg-white">
          <div className="m-2">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}