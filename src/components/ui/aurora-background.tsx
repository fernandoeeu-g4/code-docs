"use client";

import React, { memo } from "react";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
  opacity?: number;
}

export const AuroraBackground = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
    blur = 100,
    opacity = 0.1,
  }: AuroraBackgroundProps) => {
    return (
      <div className={`relative ${className}`}>
        <div
          className="absolute inset-0 -z-10 animate-aurora bg-[length:200%_auto]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
              colors[0]
            })`,
            filter: `blur(${blur}px)`,
            opacity,
            animationDuration: `${10 / speed}s`,
          }}
          aria-hidden="true"
        />
        {children}
      </div>
    );
  }
);

AuroraBackground.displayName = "AuroraBackground";
