var products = [];
var results = [];
var y = 0;
//Constructor literall function
function Product(name, filename) {
  this.label = name;
  this.filename = filename;
  this.y = 0;
}
//create/push each new object
products.push(new Product("Bag", "bag.jpg"));
products.push(new Product("Banana", "banana.jpg"));
products.push(new Product("Boots", "boots.jpg"));
products.push(new Product("Chair", "chair.jpg"));
products.push(new Product("Goblin", "goblin.jpg"));
products.push(new Product("Dragon", "dragon.jpg"));
products.push(new Product("Pen", "pen.jpg"));
products.push(new Product("Scissors", "scissors.jpg"));
products.push(new Product("Shark", "shark.jpg"));
products.push(new Product("Sweep", "sweep.jpg"));
products.push(new Product("Unicorn", "unicorn.jpg"));
products.push(new Product("USB", "usb.jpg"));
products.push(new Product("Water Can", "water_can.jpg"));
products.push(new Product("Wine Glass", "wine_glass.jpg"));
//Show all 3 images random
function showImages(){

  if(y===15){
    makeTable();
    chart();
  }else{
    var container = document.getElementById("images-container");
    container.innerHTML= "";
    var usedProducts = [];
    for (var i = 1; i<= 3; i++) {
      var randomIndex = Math.floor(Math.random() * products.length);
      var image = document.createElement("img");
      image.src = "images/" + products[randomIndex].filename;
      container.appendChild(image);
      image.addEventListener("click", recordClick);
      image.addEventListener("click", showImages);
      usedProducts.push(products[randomIndex]);
      products.splice(randomIndex,1);
    }
    products = products.concat(usedProducts);
  }
}
//Made table
function recordClick(event) {
  var clickedItem = event.target;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  var foundProduct = products.find(function(product){
    return itemSource == product.filename;
  })
  foundProduct.y++;
  y++;
  console.log(itemSource + " was clicked.");
}
//table added product data.
function makeTable(){
  var table = document.getElementById("dataInfo");
  var row = document.createElement("tr");
  var data1 = document.createElement("th");
  data1.textContent= "Products";
  row.appendChild(data1);
  var data2 =document.createElement("th");
  data2.textContent= "Results";
  row.appendChild(data2);
  table.appendChild(row);
    for(i=0; i<products.length; i++){
      if(products[i].y >0){
      var tableRow = document.createElement("tr");
      var tableData1 = document.createElement("td");
      tableData1.textContent = products[i].label;
      tableRow.appendChild(tableData1);
      var tableData2 = document.createElement("td");
      tableData2.textContent = products[i].y;
      tableRow.appendChild(tableData2);
      table.appendChild(tableRow);
    }
 }
}
//canavas js added
function chart() {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Vote Chart"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "pie",
			dataPoints: products
		}
		]
	});
	chart.render();
}

window.addEventListener("load", showImages);
window.addEventListener("load", chart);
//window.addEventListener("load", makeImagesClickable);
