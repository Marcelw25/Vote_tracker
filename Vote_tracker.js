var images = ["baby.jpeg", "boots.jpg", "chair.jpg", "dragon.jpg", "frog.jpg", "goblin.jpg", "scissors.jpg", "shark.jpg", "twinkie.jpeg", "unicorn.jpg", "usb.jpg", "water_can.jpg "]

function showImages() {
  var container = document.getElementById("randomImage");
  for (var count = 0; count <= 2; count++) {
    var randomImage = Math.floor(Math.random() * images.length);
    var image = document.createElement("img");
    image.src = "images/"+images[randomImage];
    container.appendChild(image);
  }
}

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", recordClick);
  }
}

function recordClick(event) {
  var clickedItem = event.target;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
}

window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
