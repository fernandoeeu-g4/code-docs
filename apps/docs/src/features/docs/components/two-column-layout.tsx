import * as React from "react";
import { cn } from "@/lib/utils";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
}

interface TwoColumnLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height?: string;
}

const TwoColumnLayout = React.forwardRef<HTMLDivElement, TwoColumnLayoutProps>(
  ({ className, height = "h-full", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col md:flex-row", // Stack vertically on mobile, row on desktop
          height,
          "overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TwoColumnLayout.displayName = "TwoColumnLayout";

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, width, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-y-auto",
          "h-[50vh] md:h-auto", // Fixed height on mobile, auto on desktop
          width,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Column.displayName = "Column";

export { TwoColumnLayout, Column };
