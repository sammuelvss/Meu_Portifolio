"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function BackgroundShader() {
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  const isHome = pathname === "/"; // Verifica se está na Home

  useEffect(() => {
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(getTheme());

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(getTheme());
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";
  const cores = {
    color1: isDark ? "#00007f" : "#9faeff",
    color2: isDark ? "#00008a" : "#a4caef",
    color3: isDark ? "#3930be" : "#cee3fc",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        /* --- MAGIA DA TRANSIÇÃO AQUI --- */
        opacity: isHome ? 1 : 0,
        visibility: isHome ? "visible" : "hidden",
        transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
      }}
    >
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          /* Pausa a renderização pesada 3D quando estiver em outras páginas */
          animate={isHome ? "on" : "off"}
          axesHelper="off"
          brightness={isDark ? 0.3 : 1.2}
          cAzimuthAngle={0}
          cDistance={2.5}
          cPolarAngle={90}
          cameraZoom={1}
          color1={cores.color1}
          color2={cores.color2}
          color3={cores.color3}
          embedMode="off"
          envPreset="city"
          fov={10}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.6}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={4}
          uTime={0}
          wireframe={false}
          zoomOut={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
