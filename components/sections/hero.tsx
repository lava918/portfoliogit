"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      {/* subtle muted gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,_oklch(0.98_0_0)_0%,_transparent_70%)]"
      />
      <motion.div style={{ y, opacity }} className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance text-4xl font-medium tracking-[-0.02em] sm:text-5xl md:text-6xl"
        >
          Lavanya Sharma
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
        Results-driven software engineer merging logic, creativity, and AI to build intelligent, high-impact solutions. Committed to clarity, precision, and purpose - transforming complex problems into seamless, efficient experiences that empower innovation and real-world progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex items-center gap-3"
        >
          <Link href="/projects">
            <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">View Projects</Button>
          </Link>
          <Link href="/contact" className="text-sm text-foreground underline-offset-4 hover:underline">
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1c7gCPShRInlSBaArqdoNR4GntZI-foI7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="rounded-full">
              Resume
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/lavanya-sharma-329b41246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/lava918"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
