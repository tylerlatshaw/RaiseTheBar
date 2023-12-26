import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./../components/global-components/navigation";
import Footer from "./../components/global-components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gym.tylerlatshaw.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Raise the Bar",
    default: "Raise the Bar | Weight Lifting Tracker",
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