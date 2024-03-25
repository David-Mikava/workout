const React = require('react');
const Layout = require('../Layout');

module.exports = function Exercises(props) {
  const { exercises, skills } = props;
  return (
    <Layout {...props}>
      <main className="exercise-main">
        <h2 className="skills">{skills.title}</h2>
        <ul className="ul-exercise">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="li-exercise">
              <a href={`/skills/${skills.id}/${exercise.id}`}>
              <img src={exercise.img} alt={exercise.title} />
              <h3>{exercise.title}</h3>
              </a>
            </li>
          ))}
        </ul>
        <a className="a-back" href="/skills">
          <button className="back">Back</button>
        </a>
      </main>
    </Layout>
  );
};
