const sum = require('../api/controllers/movieListController');
const MovieJsonresponse = {
    MovieName: "The Avengers",
    DirectorName: "NEw one",
    imdbRating: "8.4/10"
}
const MovieJsonRequest = {
    MovieName: "The Avengers",
    DirectorName: "NEw one",
    imdbRating: "8.4/10"
}
test('List movie details', () => {
    expect(list_all_movies()).toBe(MovieJsonresponse);
    //This test Suite would test list all movies
    //Need to add test suite to verify the error response
    //Need to add test suite to verify the empty response
    //Need to add test suite to verify the exception handling
});
test('Add movie details', () => {
    expect(create_a_movie(MovieJsonRequest).toBe(MovieJsonresponse);
    //This test Suite would test Create entry in mangoDB
    //Need to add test suite to verify the error response
    //Need to add test suite to verify the empty response
    //Need to add test suite to verify the exception handling
});