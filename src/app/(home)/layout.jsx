import { Nunito } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Soplo de Vida",
  description: "Refugio de perritos",
};

const nunito = Nunito({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${nunito.className} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
