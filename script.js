const navbar = document.querySelector(".navbar-content");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});






let valueDisplays = document.querySelectorAll(".num");
let interval = 1;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 100;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});







// Load the YouTube iFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '540',
    videoId: 'y6jRRJ9aYwE', // Replace with your video ID
    playerVars: {
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      rel: 0
    }
  });
}

$(document).ready(function(){
  $('.video-watch-list').click(()=>{
    $('#player').toggleClass('youtube-video-frame')
    $('.close-icons-first').addClass('close-icons')
  })

  $('.close-icons-first').click(()=>{
    $('.add-video-youtube').removeClass('youtube-video-frame')
      player.stopVideo();
      $('.close-icons-first').removeClass('close-icons')
      
  })




$('.close-icons-second').hide()
  // Slide Navbar Mobile
  $('.bar-icons-first').click(()=>{
    $('.navbar-content-lists').toggleClass('navbar-content-lists2');
    $('.bar-icons-first').hide()
    $('.close-icons-second').show()
  })

  $('.close-icons-second').click(()=>{
    $('.navbar-content-lists').toggleClass('navbar-content-lists2');
    $('.bar-icons-first').show()
    $('.close-icons-second').hide()
  })





});











