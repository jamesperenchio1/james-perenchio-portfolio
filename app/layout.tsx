import type { Metadata } from "next";
import {
  Space_Grotesk,
  IBM_Plex_Mono,
  Fraunces,
  Inter,
  Chakra_Petch,
  DM_Serif_Display,
  Bricolage_Grotesque,
  Outfit,
  Archivo,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

// Each font gets its own CSS variable so project themes can pick one by
// name (e.g. `display: "var(--font-fraunces), serif"`). globals.css maps the
// site-wide --font-display / --font-mono onto these.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Fonts below are only used by individual project themes, so they aren't
// preloaded on every page.
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
  preload: false,
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
  preload: false,
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  preload: false,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

const fontVariables = [
  spaceGrotesk,
  inter,
  ibmPlexMono,
  fraunces,
  chakraPetch,
  dmSerifDisplay,
  bricolage,
  outfit,
  archivo,
  jetbrainsMono,
]
  .map((f) => f.variable)
  .join(" ");

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.hero.subline,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.hero.subline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontVariables} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
