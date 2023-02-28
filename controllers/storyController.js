const express = require('express');
const model = require('../models/story');

exports.index = (req, res) =>{
    // res.send ('Display all the stories.');
    let stories = model.find();
    // console.log(stories);
    stories.forEach((obj) => {
        console.log(obj.title);
      });
    res.render('./story/index',{stories});
};

exports.new  = (req, res) => {
    res.send ('Send the new form.');
};

exports.create =  (req, res) =>{
    res.send ('create a new story.');
};

exports.show =  (req, res) =>{
    let id = req.params.id;
    let story = model.findById(id);
    if (story){
        res.render('./story/show',{story})
    }
    res.status(404).send("Cannot find the story");
    
};

exports.edit = (req, res) =>{
    res.send ('Send edit form .');
};

exports.update =  (req, res) =>{
    res.send ('update the story with id');
};

exports.delete = (req, res) =>{
    res.send ('delete the story');
};
