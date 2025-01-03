// console.log("working");

const searchAreaValue= document.getElementById("movie-name");
const searchButton = document.getElementById("search-btn");
const result = document.getElementById("result");
key = "9b672e3b";


// let url = ``;

async function fetchMovie(movieName) {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${key}`);
    const data = await response.json();
    console.log(data);
    if(data.Response === "True"){
        result.innerHTML= `
            <div class="information">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2> ${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg"> 
                        <h4> ${data.imdbRating} </h4>
                    </div>

                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>

                    <div class="genre">
                        <div> ${data.Genre.split(",").join
                            ("</div><div>")}
                        </div>
                    </div>
             </div>

             <h3>Plot :</h3>
             <p>${data.Plot}</p>
             <h3>Cast :</h3>
             <p>${data.Actors}</p> 
             <h3>Director :</h3>
             <p>${data.Director}</p>      
             
            `;
    }

    else{
        result.innerHTML= `<h3 class="msg"> ${data.Error} </h3>`
    }
}

function getMovie(){
    
    let movieName = searchAreaValue.value;

    if(movieName.value===""){
        result.innerHTML= `<h2 class="msg"> Please enter the movie name </h2> `
        return
    }
    
    else{
        fetchMovie(movieName)
    }

}

searchButton.addEventListener("click", getMovie);
// window.addEventListener("load", getMovie);