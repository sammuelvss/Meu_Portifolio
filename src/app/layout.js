import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meu Portfólio",
  description: "Currículo e Portfólio desenvolvido com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
