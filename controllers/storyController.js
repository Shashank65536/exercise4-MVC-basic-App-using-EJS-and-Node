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
    res.render('./story/new');
};

exports.create =  (req, res) =>{
    // res.send ('create a new story.');
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
};

exports.show =  (req, res) =>{
    let id = req.params.id;
    let story = model.findById(id);
    if (story){
        res.render('./story/show',{story})
    }else{
        res.status(404).send("Cannot find the story");
    }
    
    
};

exports.edit = (req, res) =>{
    // res.send ('Send edit form .');
    let id = req.params.id;
    let story = model.findById(id);
    if (story){
        res.render('./story/edit',{story})
    }else{
        res.status(404).send("Cannot find the story");
    }
    
};

exports.update =  (req, res) =>{
    // res.send ('update the story with id'); 
    let story = req.body;
    // console.log(story);
    let id = req.params.id;

    if(model.updateById(id,story)){
        res.redirect('/stories/' + id);
    }else{
        res.status(404).send("Cannot find the story with id " + id);
    }
};

exports.delete = (req, res) =>{
    res.send ('delete the story');
};
