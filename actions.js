function COPtoEURConverter(coin) {
    var coin = coin * 0.000228725;
}
function EURtoCOPConverter(coin) {
    var coin = coin * 4370.87;
}

function addItem() {
    var x = document.getElementById("cop").checked;
    var y = document.getElementById("eur").checked;
    
    if (x == true) {
        var COPcost = document.getElementById("element__cost ");
        var EURcost = COPtoEURConverter(COPcost);
    } else if (y == true) {
        var EURcost = document.getElementById("element__cost ");
        var COPcost = COPtoEURConverter(EURcost);
    }

    var items = [];
    items[0] = document.getElementById("element__title");
    items[1] = COPcost;
    items[2] = EURcost;

    var ul = document.getElementById("items__list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(items.toString()));
    ul.appendChild(li);
}

document.getElementById("enter").addEventListener("click", addItem());

