import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import { HomePage } from "@/features/home/page";

export const Route = createFileRoute("/")({
  component: HomePage,
});
