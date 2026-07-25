import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundShader from "@/components/BackgroundShader";
import TemaClaroBotao from "@/components/TemaClaroBotao"; // <-- Importe o botão aqui

export const metadata = {
  title: "Meu Portfólio",
  description: "Currículo e Portfólio desenvolvido com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <BackgroundShader />

        <Navbar />

        {/* Adicione a tag do botão aqui, fora da Navbar */}
        <TemaClaroBotao />

        {children}

        <Footer />

        <svg
          style={{ width: 0, height: 0, position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <filter id="glass-distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </body>
    </html>
  );
}
