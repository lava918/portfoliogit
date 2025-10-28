import { SkillsGrid } from "@/components/sections/skills-grid"

export default function SkillsPage() {
  const groups = [
    {
      title: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "C & C++", "PHP"],
    },
    {
      title: "Web Development",
      items: ["React.js", "Node.js", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB"],
    },
    {
      title: "Core Competencies",
      items: ["Debugging", "Problem Solving", "Analytical Thinking", "Collaboration", "Adaptability", "Project Leadership"],
    },
    {
      title: "Machine Learning & Data Science",
      items: ["Scikit-learn", "Pandas", "NumPy", "Random Forest", "PyTorch", "OpenCV", "Naïve Bayes"],
    },
    {
      title: "Development Tools & Platforms",
      items: ["Vercel", "Replit", "VS Code", "Visual Studio", "Jupyter Notebook", "PyCharm", "IntelliJ IDEA", "Google Colab", "Netlify", "MongoDB Atlas", "MySQL Workbench", "Android Studio"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    }
  ]
  return <SkillsGrid groups={groups} />
}
