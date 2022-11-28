
async function searchMovies() {
//     let loader_div = document.getElementById('loader_div');
//     loader_div.style.display = 'block';

 let movie_name = document.getElementById('movie_name').value;

try {
    let response = await fetch(`http://www.omdbapi.com/?apikey=44d9eb2a&s=${movie_name}`);

    let data = await response.json();
    console.log('data', data);
    let actual_data = data.Search;

    //console.log('actual_data', actual_data);

     appendMovies(actual_data);
} catch (err) {
    console.log('err', err);
}

}

function appendMovies(data) {

    let loader_div = document.getElementById('loader_div');
    loader_div.style.display = 'none';

let movies_div = document.getElementById('movies');

movies_div.innerHTML = null;

data.forEach(function(el){

    let div = document.createElement('div');

    let img = document.createElement('img');
    img.src = el.Poster;

    let p_name = document.createElement('p');
    p_name.innerText = el.Title;

    div.append(img, p_name);

    movies_div.append(div);
});

}

let id;

function debounce(func, delay) {

if(id) {
    clearTimeout(id);
}

id = setTimeout(function(){
func();
}, delay);
}


// function sayHello() {

// console.log('Pablo says hello');

// }
// // sayHello();

// let id = setTimeout(sayHello,3000);

// clearTimeout(id)