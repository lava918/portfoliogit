"use client"

import { motion } from "framer-motion"

type Item = {
  role: string
  org?: string
  period: string
  bullets: string[]
}

export function Timeline({ items }: { items: Item[] }) {
  return (
    <section className="mx-auto flex justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-6">

        {items.map((it, i) => (
          <div
            key={i}
            className="
              rounded-2xl
              px-6 py-6
              backdrop-blur-xl
              bg-white/10 dark:bg-black/10
              border border-gray-400/40 dark:border-gray-500/40
              transition-all
              duration-300
              hover:border-black dark:hover:border-white
              w-[95%] sm:w-[92%] md:w-[90%]
              mx-auto
            "
          >
            {/* ROLE */}
            <h3 className="font-semibold tracking-tight text-lg text-left">
              {it.role} {it.org ? `· ${it.org}` : ""}
            </h3>

            {/* PERIOD */}
            <p className="mt-1 text-sm text-muted-foreground text-left">
              {it.period}
            </p>

            {/* BULLETS */}
            <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              {it.bullets.map((b, bi) => (
                <motion.li
                  key={bi}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: bi * 0.03 }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  )
}
