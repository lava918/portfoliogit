import { ValuesLike } from "@/components/sections/values-like"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const paragraphs = [
    "Results-driven and versatile, I bring a strong foundation in software development and artificial intelligence. Known for analytical thinking, effective problem-solving, and a collaborative approach, I thrive in dynamic environments. I am passionate about crafting innovative solutions that combine functionality with real-world impact. With a commitment to excellence, I consistently aim to deliver high-quality outcomes that exceed expectations and contribute meaningfully to both team goals and technological advancement.",
  ]
  return (
    <>
      <ValuesLike title="About me" paragraphs={paragraphs} />

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-20 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="relative border-s border-border/70">
              <li className="ms-6 py-5">
                <span
                  aria-hidden
                  className="absolute -start-2.5 mt-2 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background"
                />
                <h4 className="font-medium tracking-tight">Bachelors in Computer Applications & Science</h4>
                <p className="text-sm text-muted-foreground">GLA University, Mathura, UP · Sep 2022 – Jun 2025</p>
              </li>
              <li className="ms-6 py-5">
                <span
                  aria-hidden
                  className="absolute -start-2.5 mt-2 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background"
                />
                <h4 className="font-medium tracking-tight">Intermediate in Science (CBSE)</h4>
                <p className="text-sm text-muted-foreground">H.P.J.C., Agra, UP · Mar 2021 – May 2022</p>
              </li>
              <li className="ms-6 py-5">
                <span
                  aria-hidden
                  className="absolute -start-2.5 mt-2 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background"
                />
                <h4 className="font-medium tracking-tight">Matriculation (CBSE)</h4>
                <p className="text-sm text-muted-foreground">H.P.J.C., Agra, UP · Mar 2019 – May 2020</p>
              </li>
            </ol>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                1.{" "}
                <a
                  href="https://coursera.org/share/282757ef614766349a062c30954d7a89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Google – Project Management Specialization (June 2024)
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  href="https://drive.google.com/file/d/1fPTAySUPS465onezH6dQDxmjA-U28BxH/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  University of Michigan – Python 3 Specialization (July 2024)
                </a>
              </li>
              <li>
                3.{" "}
                <a
                  href="https://coursera.org/share/d57841b41107a1f94f05ba338aad87b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Meta – Frontend Development Specialization (August 2024)
                </a>
              </li>
              <li>
                4.{" "}
                <a
                  href="https://coursera.org/share/4c7d9d08c03cf104c1b1f7e63d867939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Stanford University – Supervised Machine Learning (July 2024)
                </a>
              </li>
              <li>
                5.{" "}
                <a
                  href="https://coursera.org/share/62559b4fd313ffca1c8e103eeceb0771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  University of California, San Diego – Object Oriented Programming (Aug 2024)
                </a>
              </li>
              <li>
                6.{" "}
                <a
                  href="https://coursera.org/share/431b1dcb8add92e547f60d2897a13c99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  LearnQuest – Core Java (Mar 2024)
                </a>
              </li>
              <li>
                7.{" "}
                <a
                  href="https://coursera.org/share/f0afd3737303a629ef4a93b6d9bafdcb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Google – Computer Networking (Feb 2024)
                </a>
              </li>
              <li>
                8.{" "}
                <a
                  href="https://coursera.org/share/9b6bb27a28e55a8d72bfef2af11848a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Microsoft – IT Consultant (December 2024)
                </a>
              </li>
              <li></li>
              <li> and more...</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
