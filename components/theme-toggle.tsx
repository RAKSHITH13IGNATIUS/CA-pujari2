"use client"

import { useTheme } from "@/hooks/useTheme"

export function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.15rem",
        padding: "8px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      {isLight ? "☀️" : "🌙"}
    </button>
  )
}
