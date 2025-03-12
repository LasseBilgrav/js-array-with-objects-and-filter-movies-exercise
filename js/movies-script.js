"use strict";

// opbygger et array med javasvript objecter indeholdene film/movies
const movies = [

    {titel:"Inception", genre:"science-fiction", year:2010, duration:2.28, img:"/img/inception.webp", url:"https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_ince"},
    {titel:"Forrest-gump", genre:"drama", year:1994, duration:2.22, img:"/img/forrest-gump.webp", url:"https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_1_tt_1_nm_6_in_0_q_forres"},
    {titel:"Gladiator", genre:"action", year:2000, duration:2.35, img:"/img/gladiator.webp", url:"https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_2_tt_5_nm_1_in_0_q_gladiator"},
    {titel:"Interstellar", genre:"science-fiction", year:2014, duration:2.49, img:"/img/interstellar.webp", url:"https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_1_tt_6_nm_1_in_0_q_inters"},
    {titel:"It", genre:"horror", year:2017, duration:2.15, img:"/img/it.webp", url:"https://www.imdb.com/title/tt1396484/?ref_=nv_sr_srsg_3_tt_6_nm_2_in_0_q_it"},
    {titel:"Pupl-fuction", genre:"comedy", year:1994, duration:2.34, img:"/img/pulp-fiction.webp", url:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_pulp"},
    {titel:"Superbad", genre:"comedy", year:2007, duration:1.53, img:"/img/superbad.webp", url:"https://www.imdb.com/title/tt0829482/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_superb"},
    {titel:"The-conjuring", genre:"horror", year:2013, duration:1.52, img:"/img/the-conjuring.webp", url:"https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520conj"},
    {titel:"The-dark-knight", genre:"action", year:2008, duration:2.32, img:"/img/the-dark-knight.webp", url:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark"},
    {titel:"The-godfather", genre:"drama", year:1972, duration:2.55, img:"/img/the-godfather.webp", url:"https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520god"},
    {titel:"The-handover", genre:"comedy", year:2009, duration:1.40, img:"/img/the-hangover.webp", url:"https://www.imdb.com/title/tt1119646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520hangover"},
    {titel:"The-matix", genre:"science-fiction", year:1999, duration:2.16, img:"/img/the-matrix.webp", url:"https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_the%2520mat"}
];

//ændre html elementer movies-container og category-select
const moviesContainer = document.getElementById("movies-container");
const selectetCategory = document.getElementById("category-select");

function displayMovies(filmliste) {
    moviesContainer.innerHTML = ""; //tømmer moviesContainer for at undgå dublikationer

    //gennemløber hver film i vores array med javascript objekter og opretter et article element for hver film
    filmliste.forEach((movie) => {

        //opretter et html element article for hver film ved hjælp af innerHTML(javascript)
        const movieElement = document.createElement("article");

        //opbygger en html struktur for hver film, der inkludere titel, genre, år, varighed, billede og link til imdb
        movieElement.innerHTML = `
        <h3>${movie.titel}</h3>
        <p>Genre: ${movie.genre}</p>
        <p>År: ${movie.year}</p>
        <p>Varighed: ${movie.duration}</p>
        <figure>
            <a href="${movie.url}" target="_blank">
            <img src="${movie.img}" alt="${movie.titel}">
            </a>    
        </figure>`;
        moviesContainer.appendChild(movieElement); //tilføjer hvert article element til moviesContainer
    } );
}

//indlæser alle film når siden loades fra vores array med javascript objekter
displayMovies(movies);

selectetCategory.addEventListener("change", () => {
    //henter den valgte kategori/genre fra select elementet
    const selectedValue = selectetCategory.value; 

    let filteredMovies;

    if(selectedValue === "all") {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter((movie) => movie.genre === selectedValue); 
    }
    
    displayMovies(filteredMovies);
});