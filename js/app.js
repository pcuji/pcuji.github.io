// document.ready
$(function(){

// starting point (index) of the text I want to type on the screen
// let because it will change
let i = 0;
// text to be typed out
const text = "Hello, I am Pedro Cuji an Electrical & Computer Engineer";
// The speed/duration of the effect in milliseconds
const speed = 80;

// function to create typewriter effect
function typeWriter() {
  if (i < text.length) {
    document.getElementById("job-title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// run typewriter
typeWriter();

// sidenav bar function
$('.sidenav').sidenav();

// carousel function
$('.carousel').carousel();

// modal function
$('.modal').modal();

// floating button
$('.fixed-action-btn').floatingActionButton();

// function to display button hint
$('.tooltipped').tooltip();

// collapsible content
$('.collapsible').collapsible();


});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// for title technologies for business animation 

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });