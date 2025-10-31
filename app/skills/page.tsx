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
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      title: "Machine Learning & Data Science",
      items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly", "Random Forest", "PyTorch", "OpenCV", "Naïve Bayes"],
    },
    {
      title: "Development Tools & Platforms",
      items: ["Vercel", "Render", "Replit", "VS Code", "Cursor", "Visual Studio", "Jupyter Notebook", "PyCharm", "IntelliJ IDEA", "Google Colab", "Netlify", "MongoDB Compass", "MySQL Workbench", "Android Studio"],
    }
  ]
  return <SkillsGrid groups={groups} />
}
