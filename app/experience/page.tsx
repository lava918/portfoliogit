import { Timeline } from "@/components/sections/timeline"

export default function ExperiencePage() {
  const items = [
    {
      role: "Technical Resource Specialist",
      org: "FCS Software Solutions Pvt. Ltd.",
      period: "Jun 2025 – Sept 2025",
      bullets: [
        "• Engineered advanced multi-layered Boolean search logic and leveraged large-scale ATS/cloud data systems to drive high-precision candidate discovery and reduce manual retrieval overhead.",
        "• Collaborated with cross-functional stakeholders—including delivery teams, hiring managers, and project leads—to translate technical hiring needs for clients such as Wipro, Accenture, L&T, and global enterprises into actionable sourcing strategies.",
        "• Optimized end-to-end sourcing workflows by refining data filtering rules, automating repetitive search operations, and implementing structured pipelines, significantly accelerating shortlisting turnaround time.",
        "• Ensured high data fidelity by validating, organizing, and optimizing candidate datasets across internal systems, enhancing platform accessibility and improving decision-making across recruitment operations.",
      ],
    },
    {
      role: "ERP Software Analyst",
      org: "Minth Group",
      period: "Mar 2025 – Jun 2025",
      bullets: ["Details not disclosed."],
    },
    {
      role: "AI/ML Intern Engineer",
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
