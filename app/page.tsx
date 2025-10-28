import { Hero } from "@/components/sections/hero"

export default function Page() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium tracking-tight">Imagination</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I believe imagination sparks intelligent possibilities, where abstract ideas evolve into innovative
              AI-driven software visions shaping tomorrow’s digital world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium tracking-tight">Innovation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Innovation fuels my journey, uniting AI and software engineering to transform challenges into intelligent
              solutions that inspire meaningful growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium tracking-tight">Creation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Creation is crafting purposeful code, bringing AI-powered ideas alive as impactful software experiences
              that captivate, empower, and drive lasting change.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
