
//
//MUSIC
//

let audio = document.getElementById("bg-music");
let playButton = document.getElementById("play-button");
let prevButton = document.getElementById("prev-button");
let nextButton = document.getElementById("next-button");
let volumeControl = document.getElementById("volume");

let songs = [
    "song/stamp.mp3",
    "song/sweather.mp3",
    "song/patamuska.mp3"
];
let currentIndex = 0;

audio.src = songs[currentIndex];
playButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = "Pause";
    } else {
        audio.pause();
        playButton.innerHTML = "Play";
    }
});
prevButton.addEventListener("click", function() {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = songs.length -1;
    }
    audio.src = songs[currentIndex];
    audio.play();
});
nextButton.addEventListener("click", function() {
    currentIndex++;
    if(currentIndex === songs.length){
        currentIndex = 0;
    }
    audio.src = songs[currentIndex];
    audio.play();
});

volumeControl.addEventListener("input", function(){
  audio.volume = this.value;
});
audio.oncanplay = function() {
    audio.volume = 0.5;
 }
//
//CLOCK
//

function updateClock() {
    var currentTime = new Date();
    var currentDate = currentTime.toLocaleDateString();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var currentTimeString = currentDate + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds;
    document.getElementById("clock").innerHTML = currentTimeString;
}
setInterval(updateClock, 100);

var menuItems = document.querySelectorAll(".menu-item");

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    // remove 'selected' class from all menu items
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("selected");
    }
    // add 'selected' class to clicked menu item
    this.classList.add("selected");
  });
}

var colorSwitch = document.getElementById("color-switch");
var body = document.querySelector("body");
var currentColor = "white";
var h3Elements = document.getElementsByTagName("h3");
var h2Elements = document.getElementsByTagName("h2");
var pego = document.getElementsByTagName("p");
var postbarva = document.getElementsByClassName("post");
var buttonosdole = document.getElementsByClassName("button-container");
var next = document.getElementById("next-button");
var prev = document.getElementById("prev-button");
var play = document.getElementById("play-button");
var blockypostu = document.getElementById("blog-posts");
var bcko = document.getElementsByTagName("b");


colorSwitch.addEventListener("click", function() {
  if (currentColor === "white") {
    body.style.backgroundColor = "black";
    currentColor = "black";
    play.style.color = "white";
    prev.style.color = "white";
    next.style.color = "white";
    blockypostu.style.color = "white";
    colorSwitch.innerHTML = "White mode"
    for (var i = 0; i < h3Elements.length; i++) {
      h3Elements[i].style.color = "white";
    }
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = "white";
      }
    for (var i = 0; i < postbarva.length; i++) {
        pego[i].style.color = "white";
      }
    for (var i = 0; i < postbarva.length; i++) {
        postbarva[i].style.color = "white";
      }
    for (var i = 0; i < buttonosdole.length; i++) {
        buttonosdole[i].style.color = "white";
      }
    for (var i = 0; i < next.length; i++) {
        next[i].style.color = "white";
    }
    for (var i = 0; i < prev.length; i++) {
        prev[i].style.color = "white";
    }
    for (var i = 0; i < play.length; i++) {
        play[i].style.color = "white";
    }

      
      
  } else {
    body.style.backgroundColor = "white";
    play.style.color = "black";
    prev.style.color = "black";
    next.style.color = "black";
    blockypostu.style.color = "black";
    currentColor = "white";
    colorSwitch.innerHTML = "Dark Mode"
    for (var i = 0; i < h3Elements.length; i++) {
      h3Elements[i].style.color = "black";
    }
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = "black";
      }
    for (var i = 0; i < postbarva.length; i++) {
        pego[i].style.color = "black";
      }
      for (var i = 0; i < postbarva.length; i++) {
        postbarva[i].style.color = "black";
      }
      for (var i = 0; i < buttonosdole.length; i++) {
        buttonosdole[i].style.color = "black";
      }
      for (var i = 0; i < next.length; i++) {
        next[i].style.color = "black";
      }
      for (var i = 0; i < prev.length; i++) {
        prev[i].style.color = "black";
      }
      for (var i = 0; i < play.length; i++) {
        play[i].style.color = "black";
      }
  }
});

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
  
  document.addEventListener("selectstart", function(e){
    e.preventDefault();
  }, false);

  let currentTime = new Date().getHours();
  let greetingBox = document.getElementById("greeting-box");
  
  if (currentTime < 12) {
      greetingBox.innerHTML = "Good morning!";
  } else if (currentTime < 18) {
      greetingBox.innerHTML = "Good afternoon!";
  } else {
      greetingBox.innerHTML = "Good evening!";
  }
  
  setTimeout(function() {
      greetingBox.style.display = "none";
  }, 4000);