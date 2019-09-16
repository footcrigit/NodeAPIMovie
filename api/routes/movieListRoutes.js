'use strict';
module.exports = function(app) {
  var movieList = require('../controllers/movieListController');

  // movieList Routes
  app.route('/movies')
    .get(movieList.list_all_movies)
    .post(movieList.create_a_movie);


  app.route('/movies/movieid')
    .get(movieList.getmovie)
    .put(movieList.update_movie)
    .delete(movieList.delete_movie);
};