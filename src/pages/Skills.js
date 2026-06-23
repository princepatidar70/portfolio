import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        { name: "React.js", level: "85%" },
        { name: "JavaScript & TypeScript", level: "80%" },
        { name: "HTML & CSS", level: "85%" },
        { name: "Tailwind CSS", level: "80%" }
      ]
    },
    {
      title: "Backend & Database",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      skills: [
        { name: "Node.js & Express.js", level: "80%" },
        { name: "PostgreSQL & Prisma ORM", level: "80%" },
        { name: "MongoDB & MySQL", level: "70%" },
        { name: "REST APIs & WebSockets", level: "75%" }
      ]
    },
    {
      title: "Dev Tools & Systems",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      skills: [
        { name: "Docker & CI/CD", level: "70%" },
        { name: "Git, GitHub & Jira", level: "80%" },
        { name: "Swagger & Postman", level: "80%" },
        { name: "Teams, Slack & AI Agents", level: "80%" }
      ]
    }
  ];

  return (
    <div id="skill" className="skills-section">
      <div className="text-center mb-5">
        <h5 className="text-uppercase fw-bold mb-2" style={{ color: "var(--primary)", letterSpacing: "1px", fontSize: "0.85rem" }}>
          WHAT I EXCEL IN
        </h5>
        <h1 className="fw-bold display-5 mb-3">Technical Expertise</h1>
        <p className="text-muted section-subtitle mx-auto">
          A visual representation of my developer skills, categorized by domains of application.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="skill-category-card glass-card">
            <h3 className="category-title">
              {category.icon}
              <span>{category.title}</span>
            </h3>
            
            <div className="skill-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name-text">{skill.name}</span>
                    <span className="skill-level-percent">{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
