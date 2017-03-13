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
    var container =document.getElementById("images-container");
    container.innerHTML= "";
    var imageOne = document.createElement('img');
    var randomIndex1 = Math.floor(Math.random() * photo.length);
    var imageName1 = photo[randomIndex1];
    imageOne.src = "images/"+imageName1;
    container.appendChild(imageOne);
    photo.splice(randomIndex1, 1);

    var imageTwo = document.createElement('img');
    var randomIndex2 = Math.floor(Math.random() * photo.length);
    var imageName2 = photo[randomIndex2];
    imageTwo.src = "images/"+imageName2;
    container.appendChild(imageTwo);
    photo.splice(randomIndex2, 1);

    var image3 = document.createElement('img');
    var randomIndex3 = Math.floor(Math.random() * photo.length);
    var imageName3 = photo[randomIndex3];
    image3.src = "images/"+imageName3;
    container.appendChild(image3);
    photo.push(imageName1);
    photo.push(imageName2);
    photo.push(imageName3);
  };
}
function getNewImages(){
  recordClick(event);
  showImages();
  makeImagesClickable();
}

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
    theme: "theme3",
    title:{

      text: "Vote Results"
		},
      data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "pie",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 21  }
			]
		}
		]
	});
	chart.render();
}

window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
