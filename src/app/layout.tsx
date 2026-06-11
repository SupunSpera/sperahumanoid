import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sperahumanoid.com"),
  title: "Spera Humanoids | Next-Gen Humanoid Security for the Future",
  description: "Bipedal humanoid robots built for security presence, autonomous patrol, and low-latency encrypted remote operation in high-risk zones.",
  keywords: ["Spera", "Humanoid Robot", "Security Robotics", "Autonomous Patrol", "Defense Series", "Spera H-1", "Bipedal Robot"],
  icons: {
    icon: "/spera_favicon.svg",
    apple: "/spera_favicon.svg",
  },
  openGraph: {
    title: "Spera Humanoids | Next-Gen Humanoid Security",
    description: "Designed for Security. Built to Evolve. Meet the Spera H-1 Humanoid Platform, engineered for defense and critical operations.",
    url: "https://sperahumanoid.com",
    siteName: "Spera Humanoid",
    images: [
      {
        url: "/spera-h1.png",
        width: 1200,
        height: 630,
        alt: "Spera H-1 Humanoid Robot Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spera Humanoids | Next-Gen Humanoid Security",
    description: "Designed for Security. Built to Evolve. Meet the Spera H-1 Humanoid Platform.",
    images: ["/spera-h1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-dark-bg text-foreground font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
