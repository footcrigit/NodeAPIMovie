'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Task');

exports.list_all_movies = function(req, res) {
  try {
    Task.find({}, function(err, resp) {
      if (err)
        res.send(err);
      res.json(resp);
    });
  }catch(e){
    res.send(err);
  }
};

exports.create_a_movie = function(req, res) {
  try{
    var new_movie = new Task(req.body);
    new_movie.save(function(err, resp) {
      if (err)
        res.send(err);
      res.json(resp);
    });
  }catch(e){
    res.send(e)
  }
};


exports.getmovie = function(req, res) {
  try{
    Task.findOne({"MovieName": req.query.moviename}, function(err, resp) {
      if (err)
        res.send(err);
      console.log(resp);
      res.json(resp);
    });
  }catch(e){
    res.send(e);
  }
};


exports.update_movie = function(req, res) {
  try {
    Task.findOneAndUpdate({MovieName: req.query.moviename}, req.body, {new: true}, function(err, resp) {
      if (err)
        res.send(err);
      res.json(resp);
    });
  }catch(e){
    res.send(err);
  }
};


exports.delete_movie = function(req, res) {
  try{
    Task.remove({
      MovieName: req.query.moviename
    }, function(err, resp) {
      if (err)
        res.send(err);
      res.json({ message: 'Movie successfully deleted' });
    });
  }catch(e){
    res.send(e)
  }
};