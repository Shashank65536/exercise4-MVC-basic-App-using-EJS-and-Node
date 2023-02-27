const express = require('express');

const router = express.Router();


router.get('/', (req, res) =>{
    res.send ('Display all the stories.');
})

router.get('/new', (req, res) =>{
    res.send ('Send the new form.');
})

router.post('/', (req, res) =>{
    res.send ('add a  new element.');
})

router.get('/:id', (req, res) =>{
    res.send ('Send the story with id.' + req.params.id);
})

router.get('/:id/edit', (req, res) =>{
    res.send ('Send edit form .');
})

router.put('/:id', (req, res) =>{
    res.send ('update the story with id');
})

router.delete('/:id', (req, res) =>{
    res.send ('delete the story');
})

module.exports = router;