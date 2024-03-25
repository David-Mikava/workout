const router = require('express').Router();
const { Skill, Exercise, User, Trainning, ExerciseTraining } = require('../../db/models');
const Skills = require('../views/skills/Skills');
const Exercises = require('../views/skills/Exercises');
const Trainnings = require('../views/skills/Tranning');
const AddExercise = require('../views/skills/AddExercise');
// const Workouts = require('../views/Workouts');
// const History = require('../views/History');
const Profile = require('../views/Profile');
const Error = require('../views/Error');
const isAuth = require('../middleware/isAuth');
const admin = require('../middleware/admin');

router.get('/', isAuth, (req, res) => {
  res.redirect('/skills');
});

router.get('/skills', isAuth, async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.render(Skills, { skills });
  } catch (error) {
    console.error(error);
    res
      .sendStatus(500)
      .render(Error, { message: 'Не удалось получить записи из базы данных.', error: {} });
  }
});

router.get('/skills/:id', isAuth, async (req, res) => {
  try {
    const exercises = await Exercise.findAll({ where: { parentId: req.params.id } });
    const skills = await Skill.findOne({ where: { id: req.params.id } });
    res.render(Exercises, { exercises, skills });
  } catch (error) {
    console.error(error);
    res
      .sendStatus(500)
      .render(Error, { message: 'Не удалось получить записи из базы данных.', error: {} });
  }
});

router.get('/skills/:id/:exerciseId', isAuth, async (req, res) => {
  try {
    const skill = await Skill.findOne({ where: { id: req.params.id } });
    const exercise = await Exercise.findOne({
      where: { id: req.params.exerciseId },
      include: [{ model: Trainning, as: 'trainings', through: { attributes: [] } }],
    });

    const exerciseTraining = await ExerciseTraining.findAll({
      where: { exercisId: req.params.exerciseId },
    });
    // console.log(exerciseTraining);
    if (!skill) {
      return res.render(Error, { message: 'Навык не найден', error: {} });
    }

    res.render(Trainnings, { exercise, skill, exerciseTraining });
  } catch (error) {
    console.error(error);
    res.render(Error, { message: 'Не удалось получить записи из базы данных.', error: {} });
  }
});

router.get('/skills/:id/:exerciseId/add', isAuth, admin, async (req, res) => {
  try {
    const skill = await Skill.findOne({ where: { id: req.params.id } });
    const exercise = await Exercise.findOne({
      where: { id: req.params.exerciseId },
      include: [{ model: Trainning, as: 'trainings', through: { attributes: [] } }],
    });
    const allTrainning = await Trainning.findAll({ order: [['id', 'ASC']] });

    res.render(AddExercise, { exercise, skill, allTrainning });
  } catch (error) {
    console.error(error);
    res.render(Error, { message: 'Не удалось получить записи из базы данных.', error: {} });
  }
});

router.get('/profile', isAuth, (req, res) => {
  try {
    const user = req.session?.user;
    res.render(Profile, { user });
  } catch (error) {
    console.error(error);
    res.sendStatus(500).render(Error, { message: 'Что-то пошло не так.', error: {} });
  }
});

// router.get('/workouts', (req, res) => {
//   res.render(Workouts, {});
// });

// router.get('/history', (req, res) => {
//   res.render(History, {});
// });

module.exports = router;
