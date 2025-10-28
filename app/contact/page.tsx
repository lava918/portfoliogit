"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <>
      <motion.section
        className="mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">Let’s work together</h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Email is the best way to reach me.
        </p>
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground sm:text-base">Connect directly:</p>
          <p className="mt-2 text-base sm:text-lg">
          <span className="text-muted-foreground">Email: </span>{" "}
            <a
              href="mailto:lavanyasharma6t9@gmail.com"
              className="text-accent underline-offset-4 transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              lavanyasharma6t9@gmail.com
            </a>{" "}
          </p>
          <p className="mt-2 text-base sm:text-lg">
          <span className="text-muted-foreground">Phone: </span>{" "}
            <a
              href="tel:+919389054185"
              className="text-accent underline-offset-4 transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 93890 54185
            </a>
          </p>
        </div>
      </motion.section>
      <motion.section
        className="mx-auto max-w-4xl px-4 pb-8"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35, ease: "easeOut" }}
      >
        <h2 className="sr-only">External links</h2>
        <ul className="mt-0 flex w-full items-center justify-center gap-6 text-base sm:text-lg">
          <li>
            <a
              href="https://drive.google.com/file/d/1c7gCPShRInlSBaArqdoNR4GntZI-foI7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lavanya-sharma-329b41246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lava918"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
        <hr className="mx-auto my-6 w-80 border-t border-border sm:w-120" />
      </motion.section>

      <motion.section
        className="mx-auto max-w-5xl px-4 pb-8"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-center text-base font-medium tracking-tight text-muted-foreground">
          Certified in tech by:
        </h2>
        <ul className="flex flex-wrap items-center justify-evenly gap-4 text-sm text-muted-foreground sm:text-base">
          <li className="transition-colors hover:text-foreground">Google</li>
          <li className="transition-colors hover:text-foreground">Meta</li>
          <li className="transition-colors hover:text-foreground">Microsoft</li>
          <li className="transition-colors hover:text-foreground">Stanford University</li>
          <li className="transition-colors hover:text-foreground">University of California</li>
          <li className="transition-colors hover:text-foreground">University of Michigan</li>
        </ul>
      </motion.section>

      <section className="mx-auto hidden max-w-4xl px-4 pb-16"></section>
    </>
  )
}
