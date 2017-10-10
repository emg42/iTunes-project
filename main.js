let searchBar = document.querySelector('#search');
// let searchBtn = document.querySelector('.search-btn');
let resultsArea = document.querySelector('.song-container');
let musicPlayer = document.querySelector('audio');
let baseUrl ="https://itunes.apple.com/search?term=";
let player = document.querySelector('.music-controler')
let textInput = "";

// searchBtn.addEventListener('click', searchMusic)
function playSong(url) {
player.setAttribute("src", url);
}

function clearPage() {
results.innerHTML = "";
}

searchBar.addEventListener('submit', function(concatInnerHTML){
  concatInnerHTML.preventDefault()
  textInput = concatInnerHTML.target.querySelector('input[name = "search"]').value
  console.log(textInput);

fetch(baseUrl + textInput)
  .then(function(response){
    console.log(response.status);
      response.json().then(function(data) {
        let songs = data.results;
        console.log(songs)
        for (let i = 0; i < songs.length; i++) {
          function createHtml () {
            let results = `
              <div class="song" onclick="playSong('${songs[i].previewUrl}')">
                <img src="${songs[i].artworkUrl100}" alt="Album Artwork">
                <p class="track">${songs[i].trackName}</p>
                <p class="band">${songs[i].artistName}</p>
              </div>
            `
            return results;
          }

            let addSongs = createHtml(data);
            resultsArea.innerHTML += addSongs;
        }
      })
  })







})
