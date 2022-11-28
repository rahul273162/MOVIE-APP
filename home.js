
import navbar from './components/navbar.js';
console.log('navbar', navbar);

 let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

const movies = [
    {
name: 'RRR',
rating: 8,
img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7710/1307710-h-979ff0aaac93'
 },

{
name: 'Goodluck Jerry',
rating: 7,
img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9969/1309969-h-bb7b2b5ce796'
},

{
    name: 'MSD',
    rating: 8.5,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9225/1389225-h-d564666bc1d5'
},

{
    name: 'Doctor Strange',
    rating: 9,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b'
},

{
    name: 'Ford vs Ferrari',
    rating: 8.7,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3144/813144-h'
},

{
    name: 'Masaan',
    rating: 8.8,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/7441/1000087441/1000087441-h'
},

{
    name: 'Lion King',
    rating: 8.4,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4600/674600-h'
},

{
    name: 'Black Panther',
    rating: 9,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4416/674416-h'
},

{
    name: 'Vikram',
    rating: 8.7,
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6237/1296237-h-5662015305e4'
}
];

function slideShow() {
  const arr = ['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5594/1355594-h-c71aa114a5e4','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6826/556826-h','https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-10-21/BRH_IMG_DSK-c5ed63f3-2c1a-4fbf-ad8f-ef3a327908bc.jpg']

  let i = 0;

  let div = document.getElementById('carousel');
  let img = document.createElement('img');
  img.src = arr[0];

  div.append(img);
  i = i+1;

  setInterval(function(){
    if( i == 3){
        i = 0;
    }

    img.src = arr[i];
    i = i+1;
    div.append(img);
  }, 3000);
}

slideShow();

function appendMovies(data){

let loader_div = document.getElementById('loader_div');
loader_div.style.display = 'none';

let data_div = document.getElementById('movies');

data.forEach(function(el){
    let div = document.createElement('div');

    let p_name = document.createElement('p');
    p_name.innerHTML = `Name: ${el.name}`;

    let p_rating = document.createElement('p');
    p_rating.innerHTML = `Rating: ${el.rating}`;

    let img = document.createElement('img');
    img.id = 'poster';
    img.src = el.img;

    div.append(img, p_name, p_rating);
    data_div.append(div);
});
}



function sortLH(){
    let data = movies;

    data = data.sort((a, b) => a.rating - b.rating);
    appendMovies(data);
}


function sortHL(){
    let data = movies;

    data = data.sort((a, b) => b.rating - a.rating);
    appendMovies(data);
}






let getmeData = new Promise(function(resolve, reject) {

/* There are three state of promise.
1. pending
2. resolved
3. rejected   */


setTimeout(function(){
    let data = movies;
   
    if(data != null){
        resolve(data);   // vada poora hua it will return movies data.
    }
    else{
        reject('ERR: Server could not get movies data');
    }
}, 3000);
});

// .then means resolve.
// .catch means reject. errors.

getmeData.then(function(success) {

    appendMovies(success);

})
.catch(function(error){
    console.log('error:', error);

})







//    44d9eb2a