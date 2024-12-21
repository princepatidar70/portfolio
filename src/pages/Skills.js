const Skills = () => {
  const skills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "55%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Express.js", level: "70%" },
    { name: "MongoDB", level: "65%" },
  ];

  return (
    <div id="skill" className="skills-section">
      <h1 className="project-head">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}>
                <span className="skill-percent">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
