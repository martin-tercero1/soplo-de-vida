import { Nunito } from "next/font/google";
import { Footer } from "@/components/home/Footer";
import "./globals.css";

export const metadata = {
  title: "Soplo de Vida",
  description: "Refugio de perritos",
};

const nunito = Nunito({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Soplos de Vida es un refugio que transita, apadrina y traslada animales, su mision es darle una nueva oportunidad de vida en hogares amorosos."
        />
        <meta
          name="keywords"
          content="refugio, perritos, adopción, mascotas, animales, animales rescatados, tránsito, adopción de perros y gatos, rescate animal,  hogar para mascotas, refugio"
        />
        <meta name="author" content="Proyecto DAR" />
        <meta name="geo.placename" content="Argentina"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
