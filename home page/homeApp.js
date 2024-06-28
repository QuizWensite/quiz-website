// fetch api youtube
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=quiz&key=AIzaSyCf-zK2wWIBHVlSvXZRfpYHYjzcW7Mqn0U
let youtubeContainer = document.querySelector(".youtubeContainer");
let search = `html css js quiz`
console.log(youtubeContainer)
fetchYoutubeVideo(search);
function fetchYoutubeVideo(search) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&key=AIzaSyCf-zK2wWIBHVlSvXZRfpYHYjzcW7Mqn0U`)
        .then(response => {
            console.log("entered res")// debug
            if (!response.ok)
                throw Error(` response error : ${response.status}`)
            return response.json()
        }).then(data => {
            console.log("entered data")// debug
            console.log(data.items[0])// debug
            // console.log(data.items[0].snippet.title)// debug
            // console.log(data.items[0].snippet.description)// debug
            createYoutubeVideo(data.items[0])
        }).
        catch(err => {
            console.log(`Error : ${err}`)
        })
}
function createYoutubeVideo(data) {
    console.log("entered create")// debug
    // console.log(data.items.snippet.title)// debug
    // console.log(data.items.snippet.description)// debug
    let newVideo = document.createElement("div")
    newVideo.innerHTML = `
   <a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank">
            <img class="youtubeVideo" src="${data.snippet.thumbnails.high.url}" alt="Video Thumbnail">
        </a>
          <p class="videoTitle">${data.snippet.title}</p>
          <p class="videoDesc">
            ${data.snippet.description}
            
          </p>
    `
    youtubeContainer.appendChild(newVideo)
    console.log("entered created")// debug
}
// ${data.items.snippet.thumbnails.default.url}