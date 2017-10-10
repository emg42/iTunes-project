let searchBar = document.querySelector('#search');
// let searchBtn = document.querySelector('.search-btn');
let searchResults = document.querySelector('.song-container');
let musicPlayer = document.querySelector('audio');
let baseUrl ="https://itunes.apple.com/search?term=";

let textInput = "";

// searchBtn.addEventListener('click', searchMusic)

searchBar.addEventListener('submit', function(concatInnerHTML){
  concatInnerHTML.preventDefault()
  textInput = concatInnerHTML.target.querySelector('input[name = "search"]').value
  console.log(textInput);

fetch(baseUrl + textInput)
  .then(function(response){
    console.log(response.status);
      response.json().then(function(data) {
        let searchResultsData = data.results;
        console.log(searchResultsData)
      })
  })







})
