"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage or system preference
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = stored ? stored === "dark" : prefersDark
    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", dark ? "dark" : "light")
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ x: isDark ? 28 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-foreground"
      >
        {isDark ? <Moon className="h-3.5 w-3.5 text-background" /> : <Sun className="h-3.5 w-3.5 text-background" />}
      </motion.div>
    </motion.button>
  )
}
