import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Soplo de Vida",
  description: "Refugio de perritos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name= "viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Soplos de Vida es un refugio que transita, apadrina y traslada animales, su mision es darle una nueva oportunidad de vida en hogares amorosos."/>
        <meta name="keywords" content="refugio, perritos, adopción, mascotas, animales, animales rescatados, tránsito, adopción de perros y gatos, rescate animal,  hogar para mascotas, refugio" />
        <meta name="author" content="Proyecto DAR" />
        <meta name="geo.placename" content="Argentina"></meta>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
