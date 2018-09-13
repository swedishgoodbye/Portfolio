const express = require('express');

//schema
const Project = require('../../Schemas/Project.js');

const router = express.Router();

router.route('/').get((req, res) => {
  Project.find({})
    .populate('projects')
    .then(projects => {
      if (projects.length === 0) {
        res.status(404).json({ error: 'No projects found!' });
      } else {
        res.status(200).json(projects);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});


router.route('/:id')
.get((req, res) => {
  const { id } = req.params;
  Project.findById(id)
    .populate('project')
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

module.exports = router;
