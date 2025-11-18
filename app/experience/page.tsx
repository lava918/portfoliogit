import { Timeline } from "@/components/sections/timeline"

export default function ExperiencePage() {
  const items = [
    {
      role: "TRS 1 @ FCS Software Solutions Pvt. Ltd.",
      org: "",
      period: "Noida, UP | Jun 2025 – Sept 2025",
      bullets: [
        "Engineered advanced multi-layered Boolean search logic and leveraged large-scale ATS/cloud data systems to drive high-precision candidate discovery and significantly reduce manual retrieval overhead.",
        "Collaborated extensively with delivery teams, hiring managers, and project leadership to decode technical hiring needs for clients including Wipro, Accenture, L&T, and international partners, converting them into scalable sourcing strategies.",
        "Optimized end-to-end sourcing operations by refining filtering heuristics, automating recurring search processes, and establishing structured retrieval pipelines, resulting in a measurable improvement in shortlisting turnaround time.",
        "Maintained high data fidelity by validating, restructuring, and optimizing large candidate datasets across internal platforms, ensuring seamless system accessibility and accelerating data-driven recruitment decisions.",
      ],

    },
    {
      role: "ERP Software Analyst @ Minth Group",
      org: "",
      period: "Noida, UP | Mar 2025 – Jun 2025",
      bullets: ["Details not disclosed."],
    },
    {
      role: "AI/ML Intern Engineer @ Cothon Solutions Pvt. Ltd. · AICTE, Govt. of India",
      period: "Remote | Oct 2024 – Dec 2024",
      bullets: [
        "Architected and trained multiple high-performance machine learning models, including stock market forecasting systems, deep-learning-based species classification networks, and facial recognition pipelines with robust feature extraction.",
        "Achieved over 96% accuracy across models by applying advanced optimization techniques, hyperparameter tuning, and rigorous performance evaluation across validation and test environments.",
        "Developed fully automated ML workflows—from preprocessing, cleaning, and feature engineering to model training, benchmarking, and evaluation—ensuring scalability, reproducibility, and deployment readiness.",
        "Delivered all project modules 20% ahead of scheduled timelines while maintaining complete documentation and version control, achieving 100% delivery on GitHub/LinkedIn with transparent and reproducible artifacts.",
      ],
    },
    {
      role: "Team Lead | Frontend (Intern) @ Skill-Chase · AICTE, Govt. of India",
      period: "Remote | Jul 2024 – Sep 2024",
      bullets: [
        "Led and coordinated a 10-member engineering team in developing fully responsive, component-driven web applications using React, Tailwind, and Bootstrap, ensuring scalable and production-ready UI architecture.",
        "Provided continuous technical mentorship across component design, abstraction, debugging strategies, and workflow structuring, resulting in a significant 40% improvement in overall development velocity.",
        "Built dynamic, data-driven user interfaces with strong emphasis on code quality by enforcing linting standards, modular structuring, unit testing, and CI-aligned review practices for high reliability.",
        "Streamlined team workflows by optimizing repository structure, enforcing disciplined Git processes, and establishing structured delivery cycles that ensured consistent on-time project completion.",
      ],
    },
  ]

  return <Timeline items={items} />
}
