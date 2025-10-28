"use client"

import { motion } from "framer-motion"

type Item = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export function Timeline({ items }: { items: Item[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <ol className="relative border-s border-border/70">
        {items.map((it, i) => (
          <li key={i} className="ms-6 py-6">
            <span
              aria-hidden
              className="absolute -start-2.5 mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow ring-2 ring-background"
            />
            <motion.h3
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
              className="font-medium tracking-tight"
            >
              {it.role} · {it.org}
            </motion.h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.period}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {it.bullets.map((b, bi) => (
                <motion.li
                  key={bi}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.03 * bi }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
