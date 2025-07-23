"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { LoadingPage } from "@/components/pagination/loadingPage/LoadingPage";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{<LoadingPage />}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
