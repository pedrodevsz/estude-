"use client";

import { LoaderCircle } from "lucide-react";

export function LoadingPage() {
  return (
    <div role="status" aria-label="Carregando..." className="flex justify-center items-center min-h-screen">
      <LoaderCircle className="w-8 h-8 animate-spin" />
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
