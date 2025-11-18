import { ProjectCard } from "@/components/sections/project-card"

export default function ProjectsPage() {
  const list = [
    {
      title: "SkillSwap - Community Skill Exchange Platform | (Open-source)",
      description:
      "SkillSwap is an interactive web platform designed to connect users who want to teach or learn various skills. It offers a smooth, user-friendly interface that supports real-time collaboration, personalized interactions, and a dynamic environment for continuous learning and skill exchange.",
      imageAlt: "Skill exchange app mockup",
      tags: ["Next.js", "Typescript", "Django", "PostgreSQL", "REST"],
      placeholderQuery: "modern app dashboard skill exchange ui",
      imageSrc: "/images/skill-exchange-dashboard.jpg",
      linkLabel: "Live ↗",
      href: "https://skillswaprose.vercel.app/",
      githubLabel: "Contribute ↗",
      githubHref: "https://github.com/lava918/SkillSwap.git",
    },
    {
      title: "FitTrack - Fitness Tracking WebApp",
      description:
        "FitTrack is a sleek and intuitive fitness tracking web app that helps users log their workouts, monitor progress, and review their activity history through a clean and responsive interface designed for effortless tracking.",
      imageAlt: "Skill exchange app mockup",
      tags: ["Node.js", "React.js", "Typescript", "Tailwind CSS", "Drizzle ORM", "Vite", "Render", "HTML"],
      placeholderQuery: "modern app dashboard skill exchange ui",
      imageSrc: "/images/fittrack-webapp.jpg",
      linkLabel: "Live ↗",
      href: "https://fittrack-mt6p.onrender.com/",
      githubLabel: "GitHub ↗",
      githubHref: "https://github.com/lava918/FitTrack.git",
    },
    {
      title: "Lane Lines Detection for Cruise Control & Security",
      description:
        "Automated lane detection using Python & OpenCV: color selection (HSL), Canny edges, Gaussian smoothing, ROI masking, Hough transform, line averaging & extrapolation.",
      imageAlt: "Lane detection visualization",
      tags: ["ML", "Python", "OpenCV"],
      placeholderQuery: "lane detection visualization autonomous driving",
      imageSrc: "/images/lane-detection.jpg",
      linkLabel: "GitHub ↗",
      href: "https://github.com/lava918/lava918-Lane-lines-detection-using-Python-and-OpenCV.git",
    },
    {
      title: "Spam E-Mail Filtration",
      description:
        "High-performance spam detection trained on 5k+ emails with Naive Bayes, Random Forest, and SVM. Achieved 96% accuracy.",
      imageAlt: "Spam filter dashboard",
      tags: ["Python", "ML", "NLP"],
      placeholderQuery: "email spam filter dashboard clean ui",
      imageSrc: "/images/spam-filter.jpg",
      linkLabel: "GitHub ↗",
      href: "https://github.com/lava918/Spam_e-mail_filteration_python_and_machine_learning.git",
    },
    {
      title: "Stock Price Prediction (previous data - Tesla)",
      description:
        "Preprocessing, feature engineering, and modeling to forecast stock trends with ~90% accuracy. Visualized with Matplotlib and Plotly.",
      imageAlt: "Stock prediction chart",
      tags: ["Python", "ML", "Matplotlib", "Plotly"],
      placeholderQuery: "stock chart prediction financial dashboard",
      imageSrc: "/images/tesla-stock.jpg",
      linkLabel: "GitHub ↗",
      href: "https://github.com/lava918/Stock.git",
    },
    {
      title: "The Food Basin – Online Food Ordering Webapp",
      description:
        "A dynamic food-ordering web app enabling users to explore nearby restaurants, order from diverse cuisines, track deliveries, and enjoy a fast, smooth experience.",
      imageAlt: "Food ordering interface mockup",
      tags: ["JavaScript", "React.js", "Bootstrap", "HTML5", "CSS3"],
      placeholderQuery: "food ordering web app interface restaurant delivery ui",
      imageSrc: "/images/food-basin.jpg",
      linkLabel: "Codebase.rar ↗",
      href: "https://drive.google.com/file/d/15zDRU5xX4Wrl_QzifkYWWsKJ3rTcu_PM/view",
    },
    {
      title: "Pixel Serpent: Retro Reborn",
      description:
        "A modern Python remake of the classic Snake game, featuring smooth gameplay, endless challenges, and nostalgic fun built with PyGame.",
      imageAlt: "Retro pixel snake game screenshot",
      tags: ["Python", "PyGame"],
      placeholderQuery: "retro pixel snake game screenshot",
      imageSrc: "/images/pixel-serpent.jpg",
      linkLabel: "GitHub ↗",
      href: "https://github.com/lava918/Snake-Game-using-Python.git",
    },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
      <div className="grid gap-10">
        {list.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
