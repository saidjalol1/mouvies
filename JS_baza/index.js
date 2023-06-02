let elTemplate = document.querySelector("#temp").content;
let elList = document.querySelector(".list");
let fragment = document.createDocumentFragment();
let body = document.body;
let vew = document.querySelector("#vew");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let modal = document.querySelector(".modal");
let parda = document.querySelector(".parda3");
// let film = movies.slice(0 ,5);

for(let film of movies.slice(0 , 100)){
        let cloneNode = elTemplate.cloneNode(true);
    
        cloneNode.querySelector("#img").src =`http://i3.ytimg.com/vi/${film.ytid}/hqdefault.jpg`;
        cloneNode.querySelector(".title").textContent = film.Title;
        cloneNode.querySelector(".rating").textContent = film.imdb_rating;
        cloneNode.querySelector(".year").textContent = film.movie_year;
        cloneNode.querySelector(".duration").textContent = film.runtime;
        cloneNode.querySelector(".ganre").textContent = film.Categories;

           fragment.appendChild(cloneNode);
    }
elList.appendChild(fragment);
    

dark.addEventListener("click", () =>{
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
});
light.addEventListener("click", () =>{
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
});

body.addEventListener("click", evt =>{
    if(evt.target.matches("#vew")){
        parda.classList.add("transform");
        body.classList.add("overflow");
    }

    if(evt.target.matches(".parda3")){
        parda.classList.remove("transform");
        parda.classList.add("transform2");
        body.classList.remove("overflow");
    }
})