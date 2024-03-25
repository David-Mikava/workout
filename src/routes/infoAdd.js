const fs = require('fs');
const path = require('path');
const multer = require('multer');

const router = require('express').Router();
const { Skill, Exercise, User, Trainning, ExerciseTraining } = require('../../db/models');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'public/video'));
  },
  filename: function (req, file, cb) {
    const videoName = req.body.name.replace(/\s/g, '-');
    const filename = videoName + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 100 } });

router.post('/:id/:exerciseId', upload.single('gif'), async (req, res) => {
  try {
    const { name, purpose } = req.body;
    const trainning = await Trainning.create({
      name,
      video: '/video/' + req.file.filename,
      yourResult: 0,
      purpose,
    });

    const exerciseTrainingAdd = ExerciseTraining.create({
      treningId: trainning.id,
      exercisId: req.params.exerciseId,
    });

    res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
});

router.post('/existing/:id/:exerciseId', async (req, res) => {
  try {
    const { id } = req.body;
    const exerciseTrainingAdd = ExerciseTraining.create({
      treningId: id,
      exercisId: req.params.exerciseId,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
});

router.post('/result', async (req, res) => {
  try {
    const newresult = req.body;

    newresult.forEach(async (el) => {
      const trainningResult = await ExerciseTraining.update(
        { userResult: el.result },
        { where: { treningId: el.id, exercisId: el.exerciseid } },
      );
    });

    res.status(200).json(newresult);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    const exerciseTrainingRemove = await ExerciseTraining.destroy({ where: { treningId: id } });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
