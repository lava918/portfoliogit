import { SkillsGrid } from "@/components/sections/skills-grid"

export default function SkillsPage() {
  const groups = [
                 {
                title: "Programming Languages",
                items: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "PHP"],
              },
              {
                title: "Web Development",
                items: [
                  "Next.js",
                  "React.js",
                  "Django",
                  "Node.js",
                  "Fetch API",
                  "RESTful APIs",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3"
                ],
              },
              {
                title: "Databases",
                items: ["PostgreSQL", "Oracle", "MySQL", "SQLite", "MongoDB"],
              },
              {
                title: "Machine Learning & Data Science",
                items: [
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Plotly",
                  "PyTorch",
                  "OpenCV",
                  "Random Forest",
                  "Naïve Bayes"
                ],
              },
              {
                title: "Core Competencies",
                items: [
                  "Git",
                  "GitHub",
                  "Bash",
                  "Linux",
                  "PowerShell",
                  "Debugging",
                  "Problem Solving",
                  "Analytical Thinking",
                  "Collaboration",
                  "Adaptability",
                  "Project Leadership"
                ],
              },
              {
                title: "Development Tools & Platforms",
                items: [
                  "Firebase",
                  "Vercel",
                  "Render",
                  "Netlify",
                  "Replit",
                  "Google Colab",
                  "Jupyter Notebook",
                  "VS Code",
                  "Cursor",
                  "Antigravity",
                  "PyCharm",
                  "IntelliJ IDEA",
                  "Visual Studio",
                  "MongoDB Compass",
                  "MySQL Workbench"
                ],
              }
  ]
  return <SkillsGrid groups={groups} />
}
