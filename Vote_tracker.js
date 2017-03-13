var photo = ["bag.jpg", "banana.jpg", "boots.jpg","chair.jpg", "goblin.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"]
var photosClicked=[];
var count=0;

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", getNewImages);
  };
}

function recordClick(event) {
  var clickedItem = event.target;
  count++;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
  photosClicked.push(itemSource);
}

function showImages(){
  if(count===15){
    console.log("Survey is over!")
    alert("Thanks for participating in this short survey!")
  }else{

    var container = document.getElementById("images-container");
    container.innerHTML = "";

    var imageOne = document.createElement('img');
    var randomIndex1 = Math.floor(Math.random() * photo.length);
    var image1Name = photo[randomIndex1];
    imageOne.src = "images/"+image1Name;
    container.appendChild(imageOne);
    photo.splice(randomIndex1, 1);

    var imageTwo = document.createElement('img');
    var randomIndex2 = Math.floor(Math.random() * photo.length);
    var image2Name = photo[randomIndex2];
    imageTwo.src = "images/"+image2Name;
    container.appendChild(imageTwo);
    photo.splice(randomIndex2, 1);

    var image3 = document.createElement('img');
    var randomIndex3 = Math.floor(Math.random() * photo.length);
    var image3Name = photo[randomIndex3];
    image3.src = "images/"+image3Name;
    container.appendChild(image3);
    photo.push(image1Name);
    photo.push(image2Name);
    photo.push(image3Name);
  };
}
function getNewImages(){
  recordClick(event);
  showImages();
  makeImagesClickable();
}
window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
