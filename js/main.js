let elMoviesResult = document.querySelector(".movies-result");
let elMovieTemplete = document.querySelector(".movie-template").content;
let newMoviesFragment = new DocumentFragment();



// generate move img
function generateMovieImage(movieId){
    return `http://i3.ytimg.com/vi/${movieId}/hqdefault.jpg`
}

//genrate hour and minuts function

function generateTime(time){
    let hour = Math.floor(time / 60);
    let minut = time % 60;
    return `${hour}h ${minut}min`; 
}

// render fintiom yani js dan HTMLga kinolarni chizadigan funksiya yaratamiz
function renderMovies(movies){
    elMoviesResult.innerHTML = null
    
    for(let i = 0; i < movies.slice(0, 12).length; i++ ){
        // Movie templeteni clone qilib oldim
        let cloneMovieTemplete = elMovieTemplete.cloneNode(true);

        // clone movies templete ni ichidagi HTMl teglarga qiymat beramiz
        cloneMovieTemplete.querySelector(".movie-img").src = generateMovieImage(movies[i].ytid)
        cloneMovieTemplete.querySelector(".movie-title").textContent= `${movies[i].Title}...`;
        cloneMovieTemplete.querySelector(".movie-rating").textContent = movies[i].imdb_rating;
        cloneMovieTemplete.querySelector(".movie-year").textContent = movies[i].movie_year;
        cloneMovieTemplete.querySelector(".movie-time").textContent = generateTime(movies[i].runtime);
        cloneMovieTemplete.querySelector(".movie-category").textContent = movies[i].Categories.replaceAll("|", ", ") ;

        newMoviesFragment.appendChild(cloneMovieTemplete);
    }
    elMoviesResult.appendChild(newMoviesFragment)
}

renderMovies(movies)