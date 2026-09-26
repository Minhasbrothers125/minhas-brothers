"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Scrollable3DHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      const frameCount = 240; 
      const images: HTMLImageElement[] = [];
      const sequence = { frame: 0 };

      // Fixed: matches folder name '3d animations'
      const currentFrame = (index: number) => {
        const paddedIndexString = String(index + 1).padStart(3, "0");
        return `/images/3d animations/ffout${paddedIndexString}.gif`;
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const currentImage = images[Math.floor(sequence.frame)];
        
        if (currentImage && currentImage.complete && currentImage.naturalWidth !== 0) {
          const hRatio = canvas.width / currentImage.width;
          const vRatio = canvas.height / currentImage.height;
          const ratio = Math.max(hRatio, vRatio);
          
          const centerShiftX = (canvas.width - currentImage.width * ratio) / 2;
          const centerShiftY = (canvas.height - currentImage.height * ratio) / 2;
          
          context.drawImage(
            currentImage,
            0,
            0,
            currentImage.width,
            currentImage.height,
            centerShiftX,
            centerShiftY,
            currentImage.width * ratio,
            currentImage.height * ratio
          );
        }
      };

      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };

      updateCanvasSize();
      window.addEventListener("resize", updateCanvasSize);

      // Ensures the initial frame renders even if loaded from cache
      if (images[0]) {
        if (images[0].complete) {
          render();
        } else {
          images[0].onload = render;
        }
      }

      const tl = gsap.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 0.1,
          anticipatePin: 1,
        },
        onUpdate: render,
      });

      return () => {
        tl.kill();
        window.removeEventListener("resize", updateCanvasSize);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full absolute inset-0"
      />
    </div>
  );
}