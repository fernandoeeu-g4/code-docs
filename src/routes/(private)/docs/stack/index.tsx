import { StackPage } from "@/features/docs/pages/stack/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(private)/docs/stack/")({
  component: StackPage,
});
