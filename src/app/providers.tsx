"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={['system', 'light', 'light-medium-contrast', 'light-high-contrast', 'dark', 'dark-medium-contrast', 'dark-high-contrast']}
      enableSystem={true}
      defaultTheme="system"
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}