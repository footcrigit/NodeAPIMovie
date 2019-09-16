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
});
test('List movie details', () => {
    expect(create_a_movie(MovieJsonRequest).toBe(MovieJsonresponse);
});