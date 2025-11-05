"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/", label: "●" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16">
        <ThemeToggle />
        <ul className="flex items-center gap-3 sm:gap-5">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "text-xs sm:text-sm transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.header>
  )
}
