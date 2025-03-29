import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/features/docs/components/theme-toggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
export const Route = createRootRoute({
  component: () => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ThemeToggle />
          <Outlet />
          <TanStackRouterDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    );
  },
});
