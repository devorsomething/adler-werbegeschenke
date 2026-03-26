import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adler Werbe-Geschenke | Werbeartikel & Firmengeschenke in Bregenz",
  description: "Ihr zuverlässiger Partner für Werbeartikel, Giveaways und Firmengeschenke in Vorarlberg. Individuelle Veredelung, schnelle Lieferung, Top-Qualität.",
  keywords: "Werbeartikel, Firmengeschenke, Giveaways, Bregenz, Vorarlberg, Textilveredelung, Stickerei",
  openGraph: {
    title: "Adler Werbe-Geschenke Bregenz",
    description: "Werbeartikel & Firmengeschenke in Bregenz — Individuell & hochwertig",
    images: [
      {
        url: '/og?name=Adler%20Werbe-Geschenke&tagline=Werbeartikel%20%C2%B7%20Firmengeschenke%20%C2%B7%20Giveaways&color=%231E3A5F',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adler Werbe-Geschenke Bregenz",
    description: "Werbeartikel & Firmengeschenke in Bregenz — Individuell & hochwertig",
    images: ['/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
