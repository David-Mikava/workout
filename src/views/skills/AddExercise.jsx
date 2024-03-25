const React = require('react');
const Layout = require('../Layout');

module.exports = function AddExercise(props) {
  const { exercise, skill, allTrainning } = props;
  return (
    <Layout {...props}>
      <main className="add-main">
        <a className="a-back" href={`/skills/${skill.id}/${exercise.id}`}>
          <button className="back">Back</button>
        </a>
        <form
          className="add-form"
          name="addForm"
          data-skillid={skill.id}
          data-exerciseid={exercise.id}
        >
          <input className="add-form-input" type="text" placeholder="name" name="name" />
          <input className="add-form-input" type="number" placeholder="purpose" name="purpose" />
          <input className="gif" type="file" name="gif" />
          <div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </form>
        <h2 className="existing">Existing</h2>
        <ul className="ul-add-tranning">
          {allTrainning.map((tra) => (
            <li key={tra.id} className="li-add-tranning"  data-id={tra.id}>
              <button
                style={{ all: 'unset', cursor: 'pointer', width: '280px' }}
                name="addbtnOld"
                className="addbtnOld"
                data-id={tra.id}
                data-skillid={skill.id}
                data-exerciseid={exercise.id}
              >
                <h3
                  style={{ paddingLeft: '10px' }}
                  data-id={tra.id}
                  data-skillid={skill.id}
                  data-exerciseid={exercise.id}
                >
                  {tra.name}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
