'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Task');

exports.list_all_movies = function(req, res) {
  Task.find({}, function(err, resp) {
    if (err)
      res.send(err);
    res.json(resp);
  });
};

exports.create_a_movie = function(req, res) {
  var new_movie = new Task(req.body);
  new_movie.save(function(err, resp) {
    if (err)
      res.send(err);
    res.json(resp);
  });
};


exports.getmovie = function(req, res) {
  Task.findOne({"MovieName": req.query.moviename}, function(err, resp) {
    if (err)
      res.send(err);
    console.log(resp);
    res.json(resp);
  });
};


exports.update_movie = function(req, res) {
  Task.findOneAndUpdate({MovieName: req.query.moviename}, req.body, {new: true}, function(err, resp) {
    if (err)
      res.send(err);
    res.json(resp);
  });
};


exports.delete_movie = function(req, res) {
  Task.remove({
    MovieName: req.query.moviename
  }, function(err, resp) {
    if (err)
      res.send(err);
    res.json({ message: 'Movie successfully deleted' });
  });
};