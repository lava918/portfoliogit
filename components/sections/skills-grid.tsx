"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function SkillsGrid({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 * idx }}
          >
            <Card
              className="
                group 
                rounded-2xl 
                border border-gray-400/40 dark:border-gray-500/40
                p-6
                transition-all
                hover:border-black dark:hover:border-white
              "
            >
              <h3 className="text-lg font-medium tracking-tight">{group.title}</h3>

              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="
                      rounded-full 
                      border border-gray-400/40 dark:border-gray-500/40
                      px-3 py-2
                      transition-all
                      hover:border-black dark:hover:border-white
                      hover:bg-secondary
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
