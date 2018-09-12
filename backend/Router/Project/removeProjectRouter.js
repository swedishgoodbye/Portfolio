const express = require('express');

//schema
const Project = require('../../Schemas/Project.js');

const router = express.Router();

router
  .route('/:id')
  // .get((req, res) => {
  //   const { id } = req.params;
  //   Project.findById(id)
  //     .then(response => {
  //       res.json(response);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // })
  .put((req, res) => {
    console.log('REQ', req.body)
    const { id } = req.params;
    const updateInfo = req.body;
    if (updateInfo.projects){
    Project.findByIdAndUpdate(id, {
      $pull: { projects: updateInfo.projects }
    }, { 'new': true})
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
    }
  })

module.exports = router;
