import React from "react";
import ScrollReveal from "../components/ScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        {
          name: "React.js",
          level: "85%",
          badge: "Expert",
          desc: "SPA, Hooks, Context API",
          color: "#61DAFB",
          glow: "rgba(97, 218, 251, 0.15)",
          icon: (
            <svg className="spin-hover-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )
        },
        {
          name: "JavaScript / TS",
          level: "80%",
          badge: "Advanced",
          desc: "ES6+, Types, Async",
          color: "#3178C6",
          glow: "rgba(49, 120, 198, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="8 3 3 8 8 13" />
              <polyline points="16 3 21 8 16 13" />
              <line x1="10" y1="21" x2="14" y2="3" />
            </svg>
          )
        },
        {
          name: "HTML & CSS",
          level: "85%",
          badge: "Expert",
          desc: "Semantic, Grid, Flex",
          color: "#E34F26",
          glow: "rgba(227, 79, 38, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )
        },
        {
          name: "Tailwind CSS",
          level: "80%",
          badge: "Advanced",
          desc: "Utility-First, Responsive",
          color: "#38BDF8",
          glow: "rgba(56, 189, 248, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Backend & Database",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      skills: [
        {
          name: "Node & Express",
          level: "80%",
          badge: "Advanced",
          desc: "REST APIs, Security",
          color: "#339933",
          glow: "rgba(51, 153, 51, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="3" />
              <circle cx="5" cy="19" r="3" />
              <circle cx="19" cy="19" r="3" />
              <line x1="12" y1="8" x2="6.5" y2="16.5" />
              <line x1="12" y1="8" x2="17.5" y2="16.5" />
              <line x1="8" y1="19" x2="16" y2="19" />
            </svg>
          )
        },
        {
          name: "Postgres & Prisma",
          level: "80%",
          badge: "Advanced",
          desc: "SQL, ORM Migrations",
          color: "#4169E1",
          glow: "rgba(65, 105, 225, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          )
        },
        {
          name: "Mongo & MySQL",
          level: "70%",
          badge: "Intermediate",
          desc: "NoSQL Schemas, Queries",
          color: "#47A248",
          glow: "rgba(71, 162, 72, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="6" rx="8" ry="3" />
              <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
              <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
            </svg>
          )
        },
        {
          name: "APIs & WebSockets",
          level: "75%",
          badge: "Advanced",
          desc: "HTTP, WS, Real-time",
          color: "#00f2fe",
          glow: "rgba(0, 242, 254, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 16 12 12 8 16" />
              <polyline points="8 8 12 12 16 8" />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Dev Tools & Systems",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      skills: [
        {
          name: "Docker & CI/CD",
          level: "70%",
          badge: "Intermediate",
          desc: "Containers, Actions",
          color: "#2496ED",
          glow: "rgba(36, 150, 237, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M6 21V19M18 21V19M12 21V17" />
              <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            </svg>
          )
        },
        {
          name: "Git & Jira",
          level: "80%",
          badge: "Advanced",
          desc: "Agile, Code Review",
          color: "#F05032",
          glow: "rgba(240, 80, 50, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 15V9a4 4 0 0 0-4-4H9" />
              <line x1="6" y1="9" x2="6" y2="15" />
            </svg>
          )
        },
        {
          name: "Swagger & Postman",
          level: "80%",
          badge: "Advanced",
          desc: "API Documentation",
          color: "#85EA2D",
          glow: "rgba(133, 234, 45, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <circle cx="9" cy="15" r="2" />
              <path d="M11 15h6" />
            </svg>
          )
        },
        {
          name: "Teams, Slack & AI",
          level: "80%",
          badge: "Advanced",
          desc: "AI Agents, Workflows",
          color: "#728af4",
          glow: "rgba(114, 138, 244, 0.15)",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div id="skill" className="skills-section">
      <ScrollReveal>
        <div className="text-center mb-5">
          <h5 className="text-uppercase fw-bold mb-2" style={{ color: "var(--primary)", letterSpacing: "1px", fontSize: "0.85rem" }}>
            WHAT I EXCEL IN
          </h5>
          <h1 className="fw-bold display-5 mb-3">Technical Expertise</h1>
          <p className="text-muted section-subtitle mx-auto">
            A visual representation of my developer skills, categorized by domains of application.
          </p>
        </div>
      </ScrollReveal>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <ScrollReveal
            key={catIdx}
            direction={catIdx === 0 ? "left" : catIdx === 2 ? "right" : ""}
            className="h-100"
          >
            <div className="skill-category-card glass-card h-100">
              <h3 className="category-title">
                {category.icon}
                <span>{category.title}</span>
              </h3>
              
              <div className="skills-mini-grid">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="skill-mini-card"
                    style={{
                      "--hover-color": skill.color,
                      "--hover-glow": skill.glow
                    }}
                  >
                    <div className="skill-mini-header">
                      <div className="skill-icon-container">
                        {skill.icon}
                      </div>
                      <span className="skill-badge">{skill.badge}</span>
                    </div>
                    
                    <div className="skill-mini-info">
                      <span className="skill-mini-name">{skill.name}</span>
                      <span className="skill-mini-desc">{skill.desc}</span>
                    </div>
                    
                    <div className="skill-mini-progress-bg">
                      <div
                        className="skill-mini-progress-fill"
                        style={{ "--skill-level": skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;
