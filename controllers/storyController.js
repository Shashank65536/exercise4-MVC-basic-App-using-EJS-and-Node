const express = require('express');


exports.index = (req, res) =>{
    res.send ('Display all the stories.');
};

exports.new  = (req, res) => {
    res.send ('Send the new form.');
};

exports.create =  (req, res) =>{
    res.send ('create a new story.');
};

exports.show =  (req, res) =>{
    res.send ('Send the story with id.' + req.params.id);
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
