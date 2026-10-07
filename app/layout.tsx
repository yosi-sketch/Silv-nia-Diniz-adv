import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Silvânia Diniz | Advocacia Previdenciária em Lavras, MG";
const description = "Silvânia Diniz Sociedade de Advogados. Previdenciário desde 2005: aposentadoria urbana e rural, auxílio-doença, pensão e BPC / LOAS. Atendimento em Lavras e online.";

export const metadata: Metadata = {
  applicationName: "Silvânia Diniz Sociedade de Advogados",
  title, description,
  keywords: ["Silvânia Diniz", "advocacia previdenciária em Lavras", "aposentadoria urbana", "aposentadoria rural", "auxílio-doença", "pensão por morte", "BPC LOAS", "OAB/MG 7.814"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Silvânia Diniz Sociedade de Advogados" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
