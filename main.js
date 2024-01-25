let favorites = JSON.parse(localStorage.getItem("favorites")) || []; //edited

const premieres = document.querySelector(".premieres");
const anticipated = document.querySelector(".anticipated");
const top_movies = document.querySelector(".top_movies");
const digital = document.querySelector(".digital");

const API_KEY = "d0bfa153-9a8f-4091-9fbe-ede9ffbb6d74";
const date = new Date();
const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
const year = date.getFullYear();

// Fetching premieres
const fetchPremieres = async () => {
  
  const API_PREMIERES = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`;
    try {
      let response = await fetch(
        API_PREMIERES,
        {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

    let data = await response.json();
    if (data.items) {
      const first10Movies = data.items.slice(0, 10);
      
      first10Movies.forEach((movie) => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        cardTop.style.background = `url(${movie.posterUrlPreview})`;
        
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.style.border = "none";
        
        const heart = document.createElement("img");
        heart.classList.add("heart");
        heart.src = "./assets/whiteheart.png";
        heart.addEventListener("click", () => {
          if (heart.src.includes("whiteheart")) {
            heart.src = "./assets/redheart.png";
            const currentMovie = {
              id: movie.filmId,
              posterUrlPreview: movie.posterUrlPreview,
              rating: movie.rating,
              nameRu: movie.nameRu,
              genres: movie.genres,
            }; //edited
            favorites.push(currentMovie);
          } else {
            heart.src = "./assets/whiteheart.png";
            const currentMovieIndex = favorites.findIndex(
              (favMovie) => favMovie.id === movie.filmId //edited
            );
            if (currentMovieIndex !== -1) {
              favorites.splice(currentMovieIndex, 1);
            }
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
          displayFavorites(); //edited
        });
        const movieTitle = document.createElement("h4");
        movieTitle.classList.add("movie-title");
        movieTitle.innerHTML = movie.nameRu;
        
        const genre = document.createElement("p");
        genre.classList.add("genre");
        genre.innerHTML = movie.genres.map((genre) => genre.genre);
        
        cardTop.appendChild(rating);
        cardTop.appendChild(heart);
        
        card.appendChild(cardTop);
        card.appendChild(movieTitle);
        card.appendChild(genre);
        
        premieres.appendChild(card);
      });
    } else {
      console.log("No movies found in the response.");
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
};
fetchPremieres();

// fetching most anticipated movies

const fetchMostAnticipated = async () => {
  
  const API_ANTICIPATED = `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=CLOSES_RELEASES&page=1`;
    try {
      let response = await fetch(
        API_ANTICIPATED,
        {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

    let data = await response.json();
    console.log(data, "top anticipated")
    if (data.items) {
      const first10Movies = data.items.slice(0, 10);
      
      first10Movies.forEach((movie) => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        cardTop.style.background = `url(${movie.posterUrlPreview})`;
        
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.style.border = "none";
        
        const heart = document.createElement("img");
        heart.classList.add("heart");
        heart.src = "./assets/whiteheart.png";
        heart.addEventListener("click", () => {
          if (heart.src.includes("whiteheart")) {
            heart.src = "./assets/redheart.png";
            const currentMovie = {
              id: movie.kinopoiskId,
              posterUrlPreview: movie.posterUrlPreview,
              rating: movie.rating,
              nameRu: movie.nameRu,
              genres: movie.genres,
            }; //edited
            favorites.push(currentMovie);
          } else {
            heart.src = "./assets/whiteheart.png";
            const currentMovieIndex = favorites.findIndex(
              (favMovie) => favMovie.id === movie.filmId //edited
            );
            if (currentMovieIndex !== -1) {
              favorites.splice(currentMovieIndex, 1);
            }
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
          displayFavorites(); //edited
        });
        const movieTitle = document.createElement("h4");
        movieTitle.classList.add("movie-title");
        movieTitle.innerHTML = movie.nameRu;
        
        const genre = document.createElement("p");
        genre.classList.add("genre");
        genre.innerHTML = movie.genres.map((genre) => genre.genre);
        
        cardTop.appendChild(rating);
        cardTop.appendChild(heart);
        
        card.appendChild(cardTop);
        card.appendChild(movieTitle);
        card.appendChild(genre);
        
        anticipated.appendChild(card);
      });
    } else {
      console.log("No movies found in the response.");
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
};
fetchMostAnticipated();



// fetching top movies

const fetchTopMovies = async () => {
  
  const API_TOP_MOVIES = `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1`;
    try {
      let response = await fetch(
        API_TOP_MOVIES,
        {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

    let data = await response.json();
    console.log(data, "top movies")
    if (data.items) {
      const first10Movies = data.items.slice(0, 10);
      
      first10Movies.forEach((movie) => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        cardTop.style.background = `url(${movie.posterUrlPreview})`;
        
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.style.border = "none";
        
        const heart = document.createElement("img");
        heart.classList.add("heart");
        heart.src = "./assets/whiteheart.png";
        heart.addEventListener("click", () => {
          if (heart.src.includes("whiteheart")) {
            heart.src = "./assets/redheart.png";
            const currentMovie = {
              id: movie.filmId,
              posterUrlPreview: movie.posterUrlPreview,
              rating: movie.rating,
              nameRu: movie.nameRu,
              genres: movie.genres,
            }; //edited
            favorites.push(currentMovie);
          } else {
            heart.src = "./assets/whiteheart.png";
            const currentMovieIndex = favorites.findIndex(
              (favMovie) => favMovie.id === movie.filmId //edited
            );
            if (currentMovieIndex !== -1) {
              favorites.splice(currentMovieIndex, 1);
            }
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
          displayFavorites(); //edited
        });
        const movieTitle = document.createElement("h4");
        movieTitle.classList.add("movie-title");
        movieTitle.innerHTML = movie.nameRu;
        
        const genre = document.createElement("p");
        genre.classList.add("genre");
        genre.innerHTML = movie.genres.map((genre) => genre.genre);
        
        cardTop.appendChild(rating);
        cardTop.appendChild(heart);
        
        card.appendChild(cardTop);
        card.appendChild(movieTitle);
        card.appendChild(genre);
        
        top_movies.appendChild(card);
      });
    } else {
      console.log("No movies found in the response.");
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
};
fetchTopMovies();




// fetching digital releases

const fetchDigitalReleases = async () => {
  try {
    let response = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2024&month=JANUARY&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data, "data");

    if (data.releases) {
      const first10Movies = data.releases.slice(0, 10);
      console.log(first10Movies, "name");
      first10Movies.forEach((movie) => {
        console.log("movie", movie);
        const card = document.createElement("div");
        card.classList.add("card");
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        cardTop.style.background = `url(${movie.posterUrlPreview})`;
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.innerHTML = parseFloat(movie.rating.toFixed(1));
        const heart = document.createElement("img");
        heart.classList.add("heart");
        heart.src = "./assets/whiteheart.png";
        
          //edited
          heart.addEventListener("click", () => {
            if (heart.src.includes("whiteheart")) {
              heart.src = "./assets/redheart.png";
              const currentMovie = {
                id: movie.filmId,
                posterUrlPreview: movie.posterUrlPreview,
                rating: movie.rating,
                nameRu: movie.nameRu,
                genres: movie.genres,
              }; //edited
              favorites.push(currentMovie);
            } else {
              heart.src = "./assets/whiteheart.png";
              const currentMovieIndex = favorites.findIndex(
                (favMovie) => favMovie.id === movie.filmId //edited
              );
              if (currentMovieIndex !== -1) {
                favorites.splice(currentMovieIndex, 1);
              }
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites(); //edited
          });
        const movieTitle = document.createElement("h4");
        movieTitle.classList.add("movie-title");
        movieTitle.innerHTML = movie.nameRu;
        const genre = document.createElement("p");
        genre.classList.add("genre");
        genre.innerHTML = movie.genres.map((genre) => genre.genre);
        console.log(movie.genres, "genre");
        cardTop.appendChild(rating);
        cardTop.appendChild(heart);
        card.appendChild(cardTop);
        card.appendChild(movieTitle);
        card.appendChild(genre);
        digital.appendChild(card);
        displayFavorites(); //edited
      });
    } else {
      console.log("No movies found in the response.");
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
};
fetchDigitalReleases();


const displayFavorites = () => {
 
  const favoritesSection = document.querySelector(".favorites");
  favoritesSection.innerHTML = "";
  
  favorites.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");
    cardTop.style.background = `url(${movie.posterUrlPreview})`;
    
    const rating = document.createElement("div");
    rating.classList.add("rating");

    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.src = "./assets/redheart.png";
    heart.addEventListener("click", () => {
      // Remove the movie
      const currentMovieIndex = favorites.findIndex(
        (favMovie) => favMovie.id === movie.id
      );
      if (currentMovieIndex !== -1) {
        favorites.splice(currentMovieIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
      }
    });
    const movieTitle = document.createElement("h4");
    movieTitle.classList.add("movie-title");
    movieTitle.innerHTML = movie.nameRu;
    const genre = document.createElement("p");
    if (movie.genres) {
      const genreText = movie.genres.map((genre) => genre.genre);
      genre.classList.add("genre");
      genre.innerHTML = genreText;
      
    }
    cardTop.appendChild(rating);
    cardTop.appendChild(heart);
    
    card.appendChild(cardTop);
    card.appendChild(movieTitle);
    card.appendChild(genre);
    
    favoritesSection.appendChild(card);
  });
};
displayFavorites();