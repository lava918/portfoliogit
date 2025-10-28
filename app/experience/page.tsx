import { Timeline } from "@/components/sections/timeline"

export default function ExperiencePage() {
  const items = [
    {
      role: "Technical Resource Specialist",
      org: "FCS Software Solutions Pvt. Ltd.",
      period: "Jun 2025 – Sept 2025",
      bullets: [
        "• Leveraged SQL and advanced Boolean searches across internal/cloud databases.",
        "• Partnered with cross-functional teams to fulfill requirements for Wipro, Accenture, L&T, and international clients.",
        "• Streamlined sourcing processes, improving turnaround time for shortlisting.",
        "• Maintained data accuracy and optimized access for recruitment needs.",
      ],
    },
    {
      role: "ERP Software Analyst",
      org: "Minth Group",
      period: "Mar 2025 – Jun 2025",
      bullets: ["Details not disclosed."],
    },
    {
      role: "AI/ML Intern",
      org: "Cothon Solutions Pvt. Ltd. · AICTE, Govt. of India",
      period: "Oct 2024 – Dec 2024",
      bullets: [
        "• Developed ML models for stock prediction, species classification, and facial recognition.",
        "• Achieved >96% accuracy through rigorous training and optimization.",
        "• Built end-to-end pipelines from preprocessing to evaluation.",
        "• Delivered 20% ahead of schedule with 100% completion on GitHub/LinkedIn.",
      ],
    },
    {
      role: "Team Lead | Frontend (Intern)",
      org: "Skill‑Chase · AICTE, Govt. of India",
      period: "Jul 2024 – Sep 2024",
      bullets: [
        "• Led a 10‑person team building responsive web apps with React, Bootstrap, Tailwind.",
        "• Mentored teammates; improved development speed by 40%.",
        "• Implemented dynamic interfaces with robust code quality and testing.",
        "• Optimized workflows to achieve on‑time delivery.",
      ],
    },
  ]

  return <Timeline items={items} />
}
