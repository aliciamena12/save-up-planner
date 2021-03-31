function COPtoEURConverter(coin) {
    var coin = coin * 0.000228725;
}
function EURtoCOPConverter(coin) {
    var coin = coin * 4370.87;
}


var item = document.getElementById("element__title");

var x = document.getElementById("cop").checked;
var y = document.getElementById("eur").checked;


if (x == true) {
    var COPcost = document.getElementById("element__cost ");
    var EURcost = COPtoEURConverter(COPcost);
} else if (y == true) {
    var EURcost = document.getElementById("element__cost ");
    var COPcost = COPtoEURConverter(EURcost);
}



var node = document.createElement('li');
node.appendChild(document.createTextNode("hi"));
 
document.querySelector('ul').appendChild(node);

enter.addEventListener("click", createElement);

// document.getElementById("itemlist").value = item + COPcost + EURcost;


// function createListElement() {
// 	var li = document.createElement("li"); // creates an element "li"
// 	li.appendChild(document.createTextNode(result_item)); //makes text from input field the li text
// 	ul.appendChild(li); //adds li to ul
// }





