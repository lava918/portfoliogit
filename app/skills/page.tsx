import { SkillsGrid } from "@/components/sections/skills-grid"

export default function SkillsPage() {
  const groups = [
    {
      title: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "C & C++", "PHP"],
    },
    {
      title: "Web Development",
      items: ["Next.js", "React.js", "Node.js", "Typescript", "Tailwind CSS", "Fetch API", "RESTful APIs", "HTML5", "CSS3"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Oracle", "MySQL", "SQLite", "MongoDB"],
    },
    {
      title: "Core Competencies",
      items: ["Git", "GitHub", "Bash", "Linux", "Powershell", "Debugging", "Problem Solving", "Analytical Thinking", "Collaboration", "Adaptability", "Project Leadership"],
    },
    {
      title: "Machine Learning & Data Science",
      items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly", "Random Forest", "PyTorch", "OpenCV", "Naïve Bayes"],
    },
    {
      title: "Development Tools & Platforms",
      items: ["Firebase", "Vercel", "Render", "Replit", "VS Code", "Cursor", "Visual Studio", "Jupyter Notebook", "PyCharm", "IntelliJ IDEA", "Google Colab", "Netlify", "MongoDB Compass", "MySQL Workbench", "Android Studio"],
    }
  ]
  return <SkillsGrid groups={groups} />
}
