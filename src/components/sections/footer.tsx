"use client";
import { ABOUT_ME } from "@/components/constants/data";
import { useEffect, useState } from "react";
import { Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <footer className="py-6 mt-6 border-t border-border/[0.03]">
      {/* Copyright */}
      <div className="text-center mb-2">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {ABOUT_ME.name}. All rights reserved.
        </p>
      </div>
      
      {/* Terminal Portfolio Link */}
      <div className="flex items-center justify-center gap-1 mb-3">
        <span className="text-[11px] text-muted-foreground">Still scrolling?</span>
        <Link
          href="https://terminal.abhineshhh.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          <Terminal className="w-3 h-3" />
          <span>Visit old portfolio (curious?)</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
      
      {/* Views Counter */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/30">
          <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">Views</span>
          <span className="text-xs font-medium text-foreground">
            {mounted ? visitorCount.toLocaleString() : "—"}
          </span>
        </div>
      </div>
    </footer>
  );
}
