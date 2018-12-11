/* eslint no-restricted-globals: 'off' */

let movie = [
  {
    title: "The Dark Knight",
    year: "2008",
    director: "Steven Spielberg",
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
  return sum / movies.length;
}

//console.log(ratesAverage(movie));

// Get the average of Drama Movies
// genre: ["Action", "Crime", "Drama", "Thriller"],
function dramaMoviesRate(movie) {
  let dramaMovies = movie.filter(film => {
    if (film.genre.indexOf("Drama") >= 0) {
      //console.log(film.genre)
      //console.log(film)
      return true;
    }
    //let dramaMoviesRate = ratesAverage(film)
    return false;
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }

  let result = ratesAverage(dramaMovies);
  //console.log(result)
  return Number(result.toFixed(2));
}

console.log(dramaMoviesRate(movie));
// Order by time duration, in growing order

function orderByDuration(movies) {
  let sortedMovies = movies.sort(function(a, b) {
    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return sortedMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length !== 0) {
    let howManyMovies = movies.filter(steve => {
      if (
        steve.director.indexOf("Steven Spielberg") >= 0 &&
        steve.genre.indexOf("Drama") >= 0
      ) {
        return true;
      } else {
        return false;
      }
    });
    return (
      "Steven Spielberg directed " + howManyMovies.length + " drama movies!"
    );
  } else {
    return undefined;
  }
}
console.log(howManyMovies(movie));
// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let sortedMoviesByAlpha = movies.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedMoviesByAlpha
    .map(movie => {
      return movie.title;
    })
    .slice(0, 20);
}
// Best yearly rate average
function sumForAverage(array) {
  let summary = array.reduce(function(acc, current) {
    return acc + parseFloat(current);
  }, 0);
  return summary / array.length;
}

function bestYearAvg(movies) {
  if (movies.length !== 0) {
    const years = {};

    for (movie of movies) {
      if (movie.year in years) {
        years[movie.year].push(movie.rate);
      } else {
        years[movie.year] = [movie.rate];
      }
    }
    console.log("years", years);
    let averageOfYear = {};
    for (year of Object.keys(years)) {
      //console.log('Year',year)
      let complete = sumForAverage(years[year]);
      console.log("Complete", complete);
      averageOfYear[year] = complete;
    }
    
    //console.log('averageOfYear', averageOfYear)
    let result = Object.entries(averageOfYear).sort(function(a, b) {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        return 0;
      }
    }); 
    console.log('result:',result)
    return 'The best year was ' + result[0][0] + ' with an average rate of ' + result[0][1]
  } else {
    return undefined;
  }
}
//  console.log("averageOfYear", averageOfYear);
//console.log("bestYearAvg", years);
