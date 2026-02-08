'use client';

import { IconButton } from "@mabooky/tailored-m3";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSelector() {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <div className="flex justify-items-center gap-8 text-on-surface">
          <IconButton
            size="sm"
            shape="round"
            variant="tonal"
            selected={theme.theme === 'system'}
            onClick={() => {
              const currentTheme = theme.resolvedTheme!;
              const contrast = currentTheme.endsWith('-medium-contrast') ? '-medium-contrast'
                : currentTheme.endsWith('-high-contrast') ? '-high-contrast'
                : ''
              theme.setTheme('system' + contrast)
            }}>
            settings
          </IconButton>

          <IconButton
            size="sm"
            shape="round"
            variant="tonal"
            selected={theme.theme?.startsWith('light')}
            onClick={() => {
              const currentTheme = theme.resolvedTheme!;
              const contrast = currentTheme.endsWith('-medium-contrast') ? '-medium-contrast'
                : currentTheme.endsWith('-high-contrast') ? '-high-contrast'
                : ''
              theme.setTheme('light' + contrast)
            }}>
            light_mode
          </IconButton>

          <IconButton
            size="sm"
            shape="round"
            variant="tonal"
            selected={theme.theme?.startsWith('dark')}
            onClick={() => {
              const currentTheme = theme.resolvedTheme!;
              const contrast = currentTheme.endsWith('-medium-contrast') ? '-medium-contrast'
                : currentTheme.endsWith('-high-contrast') ? '-high-contrast'
                : ''
              theme.setTheme('dark' + contrast)
            }}>
            dark_mode
          </IconButton>

          <IconButton
            className="ms-16"
            size="sm"
            shape="round"
            variant="tonal"
            selected={!(theme.theme?.endsWith('-medium-contrast') || theme.theme?.endsWith('-high-contrast'))}
            onClick={(e) => {
              const baseTheme = theme.resolvedTheme!.startsWith('light') ? 'light' : 'dark';
              theme.setTheme(baseTheme);
            }}>
            contrast_rtl_off
          </IconButton>

          <IconButton
            size="sm"
            shape="round"
            variant="tonal"
            selected={theme.theme?.endsWith('-medium-contrast')}
            onClick={(e) => {
              const prefix = theme.resolvedTheme!.startsWith('light') ? 'light' : 'dark';
              theme.setTheme(prefix + '-medium-contrast');
            }}>
            contrast
          </IconButton>

          <IconButton
            size="sm"
            shape="round"
            variant="tonal"
            selected={theme.theme?.endsWith('-high-contrast')}
            onClick={(e) => {
              const prefix = theme.resolvedTheme!.startsWith('light') ? 'light' : 'dark';
              theme.setTheme(prefix + '-high-contrast');
            }}>
            contrast_circle
          </IconButton>
        </div>
    );
}