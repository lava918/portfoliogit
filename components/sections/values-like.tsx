"use client"

import { motion } from "framer-motion"

export function ValuesLike({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-balance text-3xl font-medium tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      <div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
