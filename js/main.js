let elMoviesResult = document.querySelector(".movies-result");
let elMovieTemplete = document.querySelector(".movie-template").content;
let newMoviesFragment = new DocumentFragment();

// reduce() metodini urganishim va tushuntirib berishim kere
let modal = document.querySelector(".modal")
let modalTitle = document.querySelector(".modal-movie-title");
let modalIframe = document.querySelector(".modal-movie-iframe");
let modalRating = document.querySelector(".modal-movie-rating");
let modalYear = document.querySelector(".modal-movie-year");
let modalTime = document.querySelector(".modal-movie-time");
let modalCategory = document.querySelector(".modal-movie-category")
let modalDesc = document.querySelector(".modal-movie-desc")
let modalLink = document.querySelector(".modal-movie-link")



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

function generateImdbLink(imdbId){
    return `https://www.imdb.com/title/${imdbId}`
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

        cloneMovieTemplete.querySelector(".movie-btn").dataset.movieId = movies[i].imdb_id;      

        newMoviesFragment.appendChild(cloneMovieTemplete);
    }
    elMoviesResult.appendChild(newMoviesFragment);
}


elMoviesResult.addEventListener("click", (evt) => {
    // console.log(evt.target.dataset.movieId);

    let movieId = evt.target.dataset.movieId;
    // console.log(movieId);

    if(evt.target.matches(".movie-btn")){
        let findMovie = movies.find(function(movie){
            return movieId === movie.imdb_id;

        })

        modalTitle.textContent = findMovie.Title;
        modalIframe.src = `https://youtube.com/embed/${findMovie.ytid}`;
        modalRating.textContent = findMovie.imdb_rating;
        modalYear.textContent = findMovie.movie_year;
        modalTime.textContent = generateTime(findMovie.runtime);
        modalCategory.textContent = findMovie.Categories.replaceAll("|", ", ");
        modalDesc.textContent = findMovie.summary;
        modalLink.href = generateImdbLink(findMovie.imdb_id)

    }

})

modal.addEventListener("hide.bs.modal", function(){
    modalIframe.src = null;
})



renderMovies(movies)

