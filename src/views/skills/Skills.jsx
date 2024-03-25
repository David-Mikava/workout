const React = require('react');
const Layout = require('../Layout');

module.exports = function Skills(props) {
  const { skills } = props;
  return (
    <Layout {...props}>
      <main className="skills-main">
        <h2 className="skills">Skills</h2>
        <ul className="ul-sklils">
          {skills.map((skill) => (
            <li key={skill.id} className="li-skills">
              <a href={`/skills/${skill.id}`}>
                <img src={skill.img} alt={skill.title} />
                <h3>{skill.title}</h3>
              </a>
            </li>
          ))}
        </ul>
        {/* <img src="/video/what.gif" alt="" /> */}
      </main>
    </Layout>
  );
};
