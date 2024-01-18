let elMovieForm = document.querySelector(".movie-form");
let elSearchInput = document.querySelector(".movie-search-input");


elMovieForm.addEventListener("input", function(){
    let searchInputValue = elSearchInput.value.trim();

    let SEARCH_QUERY = new RegExp(searchInputValue, "gi");
    let searchMovies = movies.filter(function(movie){
        return String(movie.Title).match(SEARCH_QUERY)
    })

    renderMovies(searchMovies)
})