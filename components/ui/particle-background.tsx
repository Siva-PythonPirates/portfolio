import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const numberOfParticles = 100;

  const initializeParticles = (width: number, height: number): void => {
    particles.length = 0; 
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.5,
      });
    }
  };

  // Animation loop to update and draw particles
  const animateParticles = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ): void => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around the screen edges
      if (particle.x > width) particle.x = 0;
      else if (particle.x < 0) particle.x = width;
      if (particle.y > height) particle.y = 0;
      else if (particle.y < 0) particle.y = height;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
      context.fill();
    });
    requestAnimationFrame(() => animateParticles(context, width, height));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animateParticles(context, canvas.width, canvas.height);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#000",
      }}
    />
  );
};

export default ParticleBackground;
