let elMovieForm = document.querySelector(".movie-form");
let elSearchInput = document.querySelector(".movie-search-input");
let elMovieCategory = document.querySelector(".movie-category");
let elMovieCategoryFragment = new DocumentFragment();

elMovieForm.addEventListener("input", function(){
    let searchInputValue = elSearchInput.value.trim();

    let SEARCH_QUERY = new RegExp(searchInputValue, "gi");
    let searchMovies = movies.filter(function(movie){
        return String(movie.Title).match(SEARCH_QUERY)
    })

    renderMovies(searchMovies)
})

const movies_category = [];

movies.forEach((movie) => {
    movie.Categories.split("|").forEach(category => {
        if(!movies_category.includes(category)){
            movies_category.push(category)
        }
    })
});

movies_category.forEach((category) => {
    let newOption = document.createElement("option");
    
    newOption.value = category;
    newOption.textContent = category;
    elMovieCategoryFragment.appendChild(newOption)
})

elMovieCategory.appendChild(elMovieCategoryFragment);

// CATEGORY BO'YICHA FILTER QILADIGAN FUNKSIYA YOZAMIZ
const filterMoviesByCategory = (category) => {
    const filterMovies = movies.filter((m) => {
        m.Categories.split("|").includes(category) || category === "All";
    })
    renderMovies(filterMovies)
}

elMovieCategory.addEventListener("change", () => {
    let inputValue = elMovieCategory.value;

    filterMoviesByCategory(inputValue)
} )