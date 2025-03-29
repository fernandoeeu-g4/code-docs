import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Types ---------------------------------- */

interface FlexibleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  children: React.ReactNode;
}

interface FlexibleScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface FlexibleHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface FlexibleFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface FlexibleSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
  position?: "left" | "right";
}

interface FlexibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/* ----------------------------- Main Components ----------------------------- */

const FlexibleContainer = React.forwardRef<
  HTMLDivElement,
  FlexibleContainerProps
>(({ className, height = "h-[100svh]", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(height, "flex flex-col overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
});
FlexibleContainer.displayName = "FlexibleContainer";

const FlexibleScrollArea = React.forwardRef<
  HTMLDivElement,
  FlexibleScrollAreaProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
});
FlexibleScrollArea.displayName = "FlexibleScrollArea";

const FlexibleHeader = React.forwardRef<HTMLDivElement, FlexibleHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("shrink-0", className)} {...props}>
        {children}
      </div>
    );
  }
);
FlexibleHeader.displayName = "FlexibleHeader";

const FlexibleFooter = React.forwardRef<HTMLDivElement, FlexibleFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("shrink-0", className)} {...props}>
        {children}
      </div>
    );
  }
);
FlexibleFooter.displayName = "FlexibleFooter";

const FlexibleSidebar = React.forwardRef<HTMLDivElement, FlexibleSidebarProps>(
  (
    { className, width = "w-64", position = "left", children, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("shrink-0", width, className)} {...props}>
        {children}
      </div>
    );
  }
);
FlexibleSidebar.displayName = "FlexibleSidebar";

const FlexibleContent = React.forwardRef<HTMLDivElement, FlexibleContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex-1", className)} {...props}>
        {children}
      </div>
    );
  }
);
FlexibleContent.displayName = "FlexibleContent";

/* ----------------------------- Row Layout ----------------------------- */

const FlexibleRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-row flex-1 overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
});
FlexibleRow.displayName = "FlexibleRow";

export {
  FlexibleContainer,
  FlexibleScrollArea,
  FlexibleHeader,
  FlexibleFooter,
  FlexibleSidebar,
  FlexibleContent,
  FlexibleRow,
};
