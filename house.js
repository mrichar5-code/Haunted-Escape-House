
let audioPlayer = document.getElementById("audioSrc")

$("#counter").hide();
$("#counter2").hide();

// plays title screen music


document.getElementById("start_button").addEventListener("click", () => {
  document.getElementById("starter").hidden = true;
  document.getElementById("room1").hidden = false;
  // audioPlayer.pause()
  new Audio("resources/audio/title-screen-theme.mp3").play()
  $("#counter").show();
  $("#counter2").show();
  $("#instructions").hide();
  // room 1 
});

document.getElementById("door1").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room2").hidden = false;
  console.log("opened door 1")
});


document.getElementById("door2").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room3").hidden = false;
  console.log("opened door 2")
});

document.getElementById("door3").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room4").hidden = false;
  console.log("opened door 3")
});

document.getElementById("door2leave2").addEventListener("click", () => {
  document.getElementById("room2").hidden = true;
  document.getElementById("room1").hidden = false;
});
document.getElementById("door2leave3").addEventListener("click", () => {
  document.getElementById("room3").hidden = true;
  document.getElementById("room1").hidden = false;
});

document.getElementById("door2leave4").addEventListener("click", () => {
  document.getElementById("room4").hidden = true;
  document.getElementById("room1").hidden = false;
});

document.getElementById("door4").addEventListener("click", () => {
  new Audio("resources/audio/MainJumpscare.mp3").play()
  document.getElementById("room1").hidden = true;
  document.getElementById("room5").hidden = false;
  console.log("open door 5 - Senance Room ")
});
document.getElementById("door2leave5").addEventListener("click", () => {
  document.getElementById("room5").hidden = true;
  document.getElementById("room1").hidden = false;
});

document.getElementById("new").addEventListener("click", () => {
  document.getElementById("room4").hidden = true;
  document.getElementById("finalroom").hidden = false;
});


function green(){
    $("#new").show();
};

let count=0;
let keycount=0;

$(".item").click(function() {

    $("#counter-message").html("You found a key!");
    let keyID=$(this).attr("key");
    console.log(keyID);  
    keyID="#"+keyID;
    console.log(keyID);  
    let keyDiv=$(keyID);
    console.log(keyDiv); 
    $(keyDiv).show();
    
    count = count +1;
    if (count==2) {
        green();
    }

});


$("#item1").click(function(){
    $("#item1").hide();
});

$("#item2").click(function(){
    $("#item2").hide();
});


function red(){
    $("#gameover").show();

    
};


$(".item2").hover(function() {

    $("#counter2-message").html("the ghost got u");
    let ghostID=$(this).attr("ghost");
    console.log(ghostID);  
    ghostID="#"+ghostID;
    console.log(ghostID);  
    let ghostDiv=$(ghostID);
    console.log(ghostDiv); 
    $(ghostDiv).show();

    count = count +1;
    if (count==1) {
        red();
    }

});




$(".doors").click(function() {
  new Audio("resources/audio/door_open.mp3").play()


})