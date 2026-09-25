'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ThreeDSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const box = boxRef.current;

    if (!el || !box) return;

    // Create the GSAP animation tied to scroll using gsap.context for cleanups
    const ctx = gsap.context(() => {
      gsap.to(box, {
        rotationX: 360,
        rotationY: 360,
        scale: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top center', // When the top of the section hits the center of the viewport
          end: 'bottom center', // When the bottom hits the center
          scrub: true,          // Smooth scrubbing tied directly to scroll position
          markers: false,       // Set to true if you want to debug scroll positions
        },
      });
    }, containerRef);

    // Cleanup function to kill animations and triggers on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[150vh] bg-slate-950 flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div className="sticky top-1/2 -translate-y-1/2">
        {/* 3D Animated Element */}
        <div 
          ref={boxRef}
          className="w-64 h-64 bg-gradient-to-tr from-indigo-500 to-teal-400 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          3D Scroll
        </div>
      </div>
    </section>
  );
}