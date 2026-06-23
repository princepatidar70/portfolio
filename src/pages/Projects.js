import React from "react";
import fiveline_hms from '../assets/fiveline_hms.png';
import petjio from '../assets/petjio.png';

const Projects = () => {
  const projectsData = [
    {
      title: "Plutora - Enterprise Release Management",
      description: "Plutora provides a SaaS platform to manage releases, test environments, and DevOps processes for enterprises.",
      contributions: [
        "Developed scalable UI components with React.js and Redux.",
        "Integrated REST APIs for real-time updates.",
        "Optimized performance, reducing page load times by 20%."
      ],
      tech: ["JavaScript", "TypeScript", "Jquery", "Bitbucket", "Swagger"],
      image: "https://framerusercontent.com/images/pqnCgfgyuuTy7vuKiKptZxdqIQ.png",
      link: "https://www.plutora.com",
      imgStyle: { objectFit: "cover" }
    },
    {
      title: "The Bruno Effect – Luxury Furniture",
      description: "An e-commerce platform connecting luxury furniture buyers with top global suppliers.",
      contributions: [
        "Designed and developed interactive product pages using Next.js.",
        "Implemented dynamic search and filtering functionalities.",
        "Ensured pixel-perfect UI consistency with designers."
      ],
      tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQFHoIUi0OsUmg/company-logo_200_200/company-logo_200_200/0/1694601440954/thebrunoeffect_logo?e=2147483647&v=beta&t=zO6CLY-0l2er-aybhx84k6oL5dqE2njW0WVDukdDZi4",
      link: "https://www.thebrunoeffect.com",
      imgStyle: { objectFit: "contain", padding: "10px", backgroundColor: "#1e1e2f" }
    },
    {
      title: "Silkhaus – Vacation Rental Platform",
      description: "A platform enabling property owners to list, manage, and monetize their vacation rentals.",
      contributions: [
        "Developed custom booking forms and dashboards for property owners.",
        "Integrated payment gateway using Stripe API.",
        "Conducted cross-browser compatibility testing."
      ],
      tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://static.wixstatic.com/media/df476b_19cb424065cf44869a05d046de90a0ba~mv2.jpg",
      link: "https://www.silkhaus.com",
      imgStyle: { objectFit: "cover" }
    },
    {
      title: "Fiveline HMS – SaaS-based Ayurvedic Hospital Management System",
      description: "A robust SaaS-based Hospital Management System built to optimize healthcare operations, manage master config databases, and elevate patient care delivery.",
      contributions: [
        "Designed and developed the Master Data and Settings modules for system-wide configuration.",
        "Centralized reference data (departments, procedures, diagnosis codes) with strict validation.",
        "Built role-based access control (RBAC), user permission workflows, and comprehensive audit logs."
      ],
      tech: ["React.js", "Node.js", "Postgres", "Prisma", "Express.js", "JWT Authentication", "Joi", "Tailwind CSS", "Charts.js"],
      image: fiveline_hms,
      link: "https://fivelinehms.questdigiflex.com/login",
      imgStyle: { objectFit: "cover" }
    },
    {
      title: "Petjio™ – All-in-One Pet Care App for India",
      description: "Petjio™ is a pet services app built for pet parents in India. You can book pet services online, including online vet consultations, verified vets, pet boarding, grooming, medicines, and pet training from one trusted app. Personalized by Nanu AI — built for your pet.",
      contributions: [
        "Designed and developed robust server-side REST APIs using Node.js and Express.js.",
        "Implemented database schema designs and relationships with PostgreSQL and Prisma ORM.",
        "Integrated Razorpay payment gateway for secure online bookings and payment transactions."
      ],
      tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Razorpay", "REST APIs", "JWT Authentication"],
      image: petjio,
      link: "#",
      imgStyle: { objectFit: "contain", padding: "15px", backgroundColor: "#fff" }
    }
  ];

  return (
    <div id="projects" className="py-5">
      <div className="text-center mb-5">
        <h5 className="text-uppercase fw-bold mb-2" style={{ color: "var(--primary)", letterSpacing: "1px", fontSize: "0.85rem" }}>
          MY RECENT WORK
        </h5>
        <h1 className="fw-bold display-5 mb-3">Featured Projects</h1>
        <p className="text-muted section-subtitle mx-auto">
          Here are some of the live projects I’ve worked on, showcasing my expertise in front-end and full-stack development.
        </p>
      </div>

      <div className="projects-grid mt-4">
        {projectsData.map((project, idx) => (
          <div className="project-card glass-card" key={idx}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                style={project.imgStyle}
              />
              <div className="project-image-overlay"></div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-contributions">
                {project.contributions.map((contribution, cIdx) => (
                  <li key={cIdx}>{contribution}</li>
                ))}
              </ul>

              <div className="project-tech-stack">
                {project.tech.map((t, tIdx) => (
                  <span className="tech-badge" key={tIdx}>{t}</span>
                ))}
              </div>

              <div className="project-links mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  <span>View Live Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
