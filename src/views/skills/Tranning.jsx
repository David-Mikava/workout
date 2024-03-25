const React = require('react');
const Layout = require('../Layout');

module.exports = function Trainnings(props) {
  const { exercise, skill, exerciseTraining, user } = props;
  // console.log(exerciseTraining);
  return (
    <Layout {...props}>
      <main className="exercise-main">
        <a className="a-back" href={`/skills/${skill.id}`}>
          <button className="back">Back</button>
        </a>
        <h2 className="skills">{skill.title}</h2>
        <ul className="ul-tranning">
          {exercise.trainings.map((tra) => {
            const filterexercise = exerciseTraining.filter((el) => el.treningId === tra.id);
            return (
              <li key={tra.id} className="li-tranning" id={`${tra.id}`}>
                {/* <div className="div-video"> */}
                <img className="video" width="351" height="260" src={tra.video} />
                {/* </div> */}
                <div className="div-info-tranning">
                  <div className="div-info-result">
                    <h3>{tra.name}</h3>
                    <p className="info-result">Last result: {filterexercise[0].userResult}x</p>
                    <p>Purpose: {tra.purpose}x</p>
                    <p>3 Sets</p>
                  </div>
                  <input
                    className="input-result"
                    type="number"
                    id={tra.id}
                    data-exerciseid={exercise.id}
                  />
                  {user.role === 'ADMIN' ? (
                    <button name="remove" className="remove" id={tra.id}>
                      X
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        <footer className="footer-trannig">
          <button className="finish" name="finish">
            Finish
          </button>
          {user.role === 'ADMIN' ? (
            <a className="reg" href={`/skills/${skill.id}/${exercise.id}/add`}>
              <button className="add-tranning">Add</button>
            </a>
          ) : null}
        </footer>
      </main>
    </Layout>
  );
};
