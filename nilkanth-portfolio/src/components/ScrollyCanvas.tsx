"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 60;

// Helper to format frame numbers like 00, 01...
const getFrameString = (index: number) => index.toString().padStart(2, "0");

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${getFrameString(i)}_delay-0.067s.webp`;
      img.onload = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      // In case of error (e.g. placeholder not existing yet), still count to not block forever
      img.onerror = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame];

      if (img && img.complete && img.naturalWidth > 0) {
        // Handle responsive canvas sizing
        const parent = canvas.parentElement;
        if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }

        // Object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        // Zoom in slightly to allow horizontal/vertical panning and avoid overlapping text
        const zoom = 1.12; 
        let renderWidth = canvas.width;
        let renderHeight = canvas.height;
        let x = 0;
        let y = 0;

        if (canvasRatio < imgRatio) {
          // Canvas is taller than image (relative to width)
          renderWidth = canvas.height * imgRatio * zoom;
          renderHeight = canvas.height * zoom;
          // Shift the crop to the right (x closer to 0) to keep the subject visible on the right half of the screen
          x = (canvas.width - renderWidth) * 0.30;
          y = (canvas.height - renderHeight) / 2;
        } else {
          // Canvas is wider than image (relative to height)
          renderWidth = canvas.width * zoom;
          renderHeight = (canvas.width / imgRatio) * zoom;
          // Shift the crop to the right (x closer to 0) to push the face to the right half of the desktop screen
          x = (canvas.width - renderWidth) * 0.15;
          y = (canvas.height - renderHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, renderWidth, renderHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded, frameIndex, images]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50 text-white">
            <span className="animate-pulse">Loading Sequence...</span>
          </div>
        )}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Soft bottom gradient to merge seamlessly with the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10" />

        {/* Parallax Overlay Text Sections */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
