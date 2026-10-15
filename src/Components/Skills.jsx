import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="shell">
        <p className="section-kicker">02 / TOOLKIT</p>
        <div className="skills-heading">
          <h2>
            Technologies I
            <br />
            <em>work with.</em>
          </h2>
          <p>Always learning, always building.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={skill}>
              <span>0{index + 1}</span>
              <b>{skill}</b>
              <i>&#8599;</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
