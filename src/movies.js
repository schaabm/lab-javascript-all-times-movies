/* eslint no-restricted-globals: 'off' */


let movie = [
  {
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    duration: "2h",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: "9.25"
  }
];
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  return array.map(function(item) {
    let checkValueHour = false;
    let checkValueMinutes = false;
    if (item.duration.indexOf("h", "") >= 0) {
      checkValueHour = true;
    }
    if (item.duration.indexOf("min", "") >= 0) {
      checkValueMinutes = true;
    }
    let res = item.duration.replace(/[^0-9 ]/gi, "").split(" ");
    let newMovie = Object.assign({}, item);
    if (checkValueHour === true && checkValueMinutes === true) {
      let hour = parseInt(res[0]);
      let minutes = parseInt(res[1]);
      newMovie.duration = hour * 60 + minutes;
    } else if (checkValueHour === true && checkValueMinutes === false) {
      let hour = parseInt(res[0]);
      newMovie.duration = hour * 60;
    } else if (checkValueHour === false && checkValueMinutes === true) {
      let minutes = parseInt(res[0]);
      newMovie.duration = minutes;
    }
    return newMovie;
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const sum = movies.reduce((acc, movie) => {
    return acc + movie.rate;
  }, 0);
  return sum / movies.length
}

console.log(ratesAverage(movie));



// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
