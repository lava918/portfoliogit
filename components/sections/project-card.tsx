"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Project = {
  title: string
  description: string
  imageAlt: string
  href?: string
  tags?: string[]
  placeholderQuery: string
  imageSrc?: string
  linkLabel?: string
}

export function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1])

  return (
    <motion.div ref={ref} style={{ y, scale }}>
      <Card className="group overflow-hidden rounded-2xl border-border/80 transition-colors hover:border-foreground/30">
        <CardHeader>
          <CardTitle className="text-xl">{p.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid items-center gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70">
            <Image
              src={p.imageSrc || `/.jpg?height=720&width=960&query=${encodeURIComponent(p.placeholderQuery)}`}
              alt={p.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
          <div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{p.description}</p>
            {p.tags && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
            {typeof p.linkLabel === "string" &&
              (p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-accent underline-offset-4 transition-colors hover:underline"
                >
                  {p.linkLabel || "View details"}
                </a>
              ) : (
                <span className="mt-4 inline-block text-sm text-muted-foreground">{p.linkLabel}</span>
              ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
