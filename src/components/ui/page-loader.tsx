"use client";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background transition-opacity duration-300">
      {/* Logo/Name */}
      <div className="mb-8 animate-pulse">
        <span className="text-2xl font-bold text-foreground">abhinesh.</span>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-100 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-xs text-muted-foreground font-mono">
        loading...
      </p>
    </div>
  );
}
