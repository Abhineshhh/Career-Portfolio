"use client";
import { ABOUT_ME } from "@/components/constants/data";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Get or initialize visitor count
    let count = 0;
    const storedCount = localStorage.getItem('visitorCount');
    
    if (storedCount) {
      count = parseInt(storedCount, 10) + 1;
    } else {
      count = 1;
    }
    
    localStorage.setItem('visitorCount', count.toString());
    setVisitorCount(count);
  }, []);

  return (
    <footer className="py-8 mt-8 border-t border-border/5">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Eye className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {mounted ? visitorCount.toLocaleString() : "—"} views
        </span>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {ABOUT_ME.name}
        </p>
      </div>
    </footer>
  );
}
