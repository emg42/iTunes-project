let searchBar = document.querySelector('.main-search-bar');
let searchBtn = document.querySelector('.search-btn');
let searchResults = document.querySelector('.song-container');
let musicPlayer = document.querySelector('audio');
let url ="";

searchBtn.addEventListener('click', searchMusic)


function searchMusic (){
let input = searchBar.value;
let url = "https://itunes.apple.com/search?term=" + input + "&country=US&media=music";
}
