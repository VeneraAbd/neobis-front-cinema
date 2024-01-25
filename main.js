
let favorites = [];

const premieres = document.querySelector('.premieres');

// Fetching premieres
const fetchPremieres = async() =>{
    try{
        let response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JANUARY', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'd0bfa153-9a8f-4091-9fbe-ede9ffbb6d74',
                    'Content-Type': 'application/json',
                },
            })
        let data = await response.json();
        
        if (data.items) {
            const first10Movies = data.items.slice(0, 10);
            // console.log(first10Movies, "name");
            first10Movies.forEach((movie)=>{
                    console.log("movie", movie)

                const card = document.createElement('div');
                card.classList.add('card');
                
                const cardTop = document.createElement('div')
                cardTop.classList.add('card-top');
                cardTop.style.background = `url(${movie.posterUrlPreview})`;
                
                const rating = document.createElement("div");
                rating.classList.add('rating');
                rating.style.border= "none";
                
                const heart = document.createElement('img');
                heart.classList.add('heart');
                heart.src = "./assets/whiteheart.png" 
            f    
                heart.addEventListener('click', () => {
                    
                    if (heart.src.includes('whiteheart')) {
                     
                      heart.src = "./assets/redheart.png";
                      
                      const currentMovie = { id: movie.filmId };
                      favorites.push(currentMovie);
                    } else {
                     
                      heart.src = "./assets/whiteheart.png";
                      
                      const currentMovieIndex = favorites.findIndex(movie => movie.id === currentMovie.id);
                      if (currentMovieIndex !== -1) {
                        favorites.splice(currentMovieIndex, 1);
                      }
                    }

                    localStorage.setItem("favorites", JSON.stringify(favorites));
                  });
                
                const movieTitle= document.createElement('h4');
                movieTitle.classList.add('movie-title');
                movieTitle.innerHTML = movie.nameRu;
            
                const genre = document.createElement('p');
                genre.classList.add('genre');
                genre.innerHTML = movie.genres.map(genre => genre.genre);
                console.log(movie.genre, "genre")
                
                cardTop.appendChild(rating);
                cardTop.appendChild(heart);
                
                card.appendChild(cardTop);
                card.appendChild(movieTitle);
                card.appendChild(genre);

                premieres.appendChild(card);
            })
            
          } else {
            console.log('No movies found in the response.');
          }
        }catch(error){
            console.log('Error fetching data:', error.message)
        }
}
fetchPremieres()


const digital = document.querySelector('.digital');
const fetchDigitalReleases = async() =>{
    try{
        let response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2024&month=JANUARY&page=1', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'd0bfa153-9a8f-4091-9fbe-ede9ffbb6d74',
                    'Content-Type': 'application/json',
                },
            })
        let data = await response.json();
        console.log(data, "data")
        if (data.releases) {
            const first10Movies = data.releases.slice(0, 10);
            console.log(first10Movies, "name");
            
            first10Movies.forEach((movie)=>{
                    console.log("movie", movie)

                const card = document.createElement('div');
                card.classList.add('card');
            
                const cardTop = document.createElement('div')
                cardTop.classList.add('card-top');
                cardTop.style.background = `url(${movie.posterUrlPreview})`;
                
                const rating = document.createElement("div");
                rating.classList.add('rating');
                rating.innerHTML = parseFloat(movie.rating.toFixed(1));
                
                const heart = document.createElement('img');
                heart.classList.add('heart');
                heart.src = "./assets/whiteheart.png" 
                
                const movieTitle= document.createElement('h4');
                movieTitle.classList.add('movie-title');
                movieTitle.innerHTML = movie.nameRu;
                
                const genre = document.createElement('p');
                genre.classList.add('genre');
                genre.innerHTML = movie.genres.map(genre => genre.genre);
                console.log(movie.genre, "genre")
                
                cardTop.appendChild(rating);
                cardTop.appendChild(heart);
                
                card.appendChild(cardTop);
                card.appendChild(movieTitle);
                card.appendChild(genre);

                digital.appendChild(card);
            })
            
          } else {
            console.log('No movies found in the response.');
          }
        }catch(error){
            console.log('Error fetching data:', error.message)
        }
}
fetchDigitalReleases();


const displayFavorites = ()=>{

//     const favoriteMovies = document.querySelector(".favorites");
 
//   favorites.forEach((movie) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = movie.title;
//     favoriteMovies.appendChild(listItem);
//   });
}