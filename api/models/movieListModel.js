
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieDetailsSchema = new Schema({
  MovieName : String,
  DirectorName: String,
  imdbRating: String
});

module.exports = mongoose.model('Task', MovieDetailsSchema,'MovieDtl');