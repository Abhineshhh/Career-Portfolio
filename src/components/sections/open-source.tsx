"use client";
import { OPEN_SOURCE } from "@/components/constants/data";
import { Trophy, GitMerge, Flame } from "lucide-react";

export default function OpenSource() {
  const achievements = OPEN_SOURCE.filter(item => item.type === 'achievement');
  const contributions = OPEN_SOURCE.filter(item => item.type === 'contribution');

  return (
    <section className="py-10 border-t border-border/[0.03]" id="open-source">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="text-xl font-semibold">open source.</h2>
        <p className="text-sm text-muted-foreground font-mono">contributions & achievements</p>
      </div>

      {/* Achievements Section */}
      <div className="flex mb-6">
        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 mr-4">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-foreground text-background rounded-full">
              Winner
            </span>
            <span className="text-xs text-muted-foreground font-mono">2023 - 2024</span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-4">Open Source Competitions</h3>
          
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{item.organization}</span>
                  <span className="text-xs text-muted-foreground font-mono">({item.period})</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contributions Section */}
      {contributions.map((item, index) => (
        <div key={index} className="flex">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 mr-4">
            <GitMerge className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
            <h3 className="text-lg font-bold text-foreground mb-1">{item.organization}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.stats?.map((stat, i) => (
                <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 text-xs font-medium text-foreground/70">
                  <Flame className="w-3 h-3" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
