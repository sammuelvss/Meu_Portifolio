"use client";

import { useEffect, useRef, useState } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Aumentamos o raio para o funil ficar bem largo e visível
    let mouse = { x: -1000, y: -1000, radius: 390 };

    const isDark = theme === "dark";
    const colors = isDark
      ? ["#ffffff", "#a5b4fc", "#7dd3fc", "#c4b5fd"]
      : ["#1e3a8a", "#3730a3", "#0369a1", "#5b21b6"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.initialX = x;
        this.initialY = y;

        this.size = Math.random() * 2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.015 + 0.005;
        this.amplitude = Math.random() * 30 + 10;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.angle += this.speed;

        // Calcula a posição natural onde a partícula deveria estar flutuando
        let baseX = this.initialX + Math.cos(this.angle) * this.amplitude;
        let baseY = this.initialY + Math.sin(this.angle) * this.amplitude;

        // Distância entre a posição natural da partícula e o mouse
        let dx = baseX - mouse.x;
        let dy = baseY - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let targetX = baseX;
        let targetY = baseY;

        // --- A MATEMÁTICA DO FUNIL ---
        if (distance < mouse.radius && distance > 0) {
          // O expoente 0.2 é o "poder" do funil.
          // Ele comprime as partículas em direção à borda, deixando o centro totalmente vazio.
          let pushFactor = Math.pow(distance / mouse.radius, 0.35);
          let newDistance = mouse.radius * pushFactor;

          // Define o novo alvo empurrando a partícula radialmente para fora
          targetX = mouse.x + (dx / distance) * newDistance;
          targetY = mouse.y + (dy / distance) * newDistance;
        }

        // Interpolação linear: a partícula viaja suavemente até o alvo, criando uma resposta elástica
        this.x += (targetX - this.x) / 12;
        this.y += (targetY - this.y) / 12;
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 6000;
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
