// Detecting Button Press

var drumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

// Detecting Keyboard Press

function makeSound(key) {
    switch (key) {
        case "w":
          var wDrum = new Audio("sounds/tom-1.mp3");
          wDrum.play();
          break;

        case "a":
          var aDrum = new Audio("sounds/tom-2.mp3");
          aDrum.play();
          break;

        case "s":
          var sDrum = new Audio("sounds/tom-3.mp3");
          sDrum.play();
          break;

        case "d":
          var dDrum = new Audio("sounds/tom-4.mp3");
          dDrum.play();
          break;

        case "j":
          var jDrum = new Audio("sounds/snare.mp3");
          jDrum.play();
          break;

        case "k":
          var kDrum = new Audio("sounds/crash.mp3");
          kDrum.play();
          break;

        case "l":
          var lDrum = new Audio("sounds/kick-bass.mp3");
          lDrum.play();
          break;

        default: console.log(buttonInnerHTML);

      }
    }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
