import { FaCode, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    Languages: [
      { name: 'HTML', icon: <FaCode /> },
      { name: 'CSS', icon: <FaCode /> },
      { name: 'JavaScript', icon: <FaCode /> },
      { name: 'Java', icon: <FaCode /> },
      { name: 'PHP', icon: <FaPhp /> },
    ],
    Frameworks: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-categories">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-grid">
                {skillList.map((skill, index) => (
                  <div key={index} className="skill-box">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <span className="skill-name">{skill.name}</span>
                    {skill.subtext && <span className="skill-subtext">{skill.subtext}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;