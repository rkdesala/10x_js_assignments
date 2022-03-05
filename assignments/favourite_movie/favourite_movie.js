const movies = [];

function favouriteMovie(operation, movie) {
  // Write your code here
  //const movie_array = [];
  if (operation == "add") {
    movie_array.push(movie);
    return movie_array;
  } else if (operation == "remove") {
    movie_array.pop();
    return movie_array;
  }
}
const movie_array = [];
module.exports = favouriteMovie;
