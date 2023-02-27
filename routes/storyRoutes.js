const express = require('express');

const router = express.Router();

const controller = require('../controllers/storyController');

router.get('/', controller.index);

router.get('/new', controller.new);

router.post('/', controller.create)

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', (req, res) =>{
    res.send ('update the story with id');
})

router.delete('/:id', controller.delete);

module.exports = router;