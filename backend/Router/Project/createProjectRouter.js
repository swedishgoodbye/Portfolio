const express = require("express");

const Project = require('../../Schemas/Project.js');

const router = express.Router();

router.post('/', (req, res) => {
    const item = req.body;
    console.log('REQ.BODY', req.body)
    console.log(item)
    Project.create(item)
        .then(item => res.status(201).json('Saved New Project'))
        .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;