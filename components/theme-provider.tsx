"use client"

import * as React from "react"

// Temporarily disable theme toggling to force the finance theme.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
