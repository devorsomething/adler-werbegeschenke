import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adler Werbe-Geschenke | Werbeartikel & Firmengeschenke in Bregenz",
  description: "Ihr zuverlässiger Partner für Werbeartikel, Giveaways und Firmengeschenke in Vorarlberg. Individuelle Veredelung, schnelle Lieferung, Top-Qualität.",
  keywords: "Werbeartikel, Firmengeschenke, Giveaways, Bregenz, Vorarlberg, Textilveredelung, Stickerei",
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
