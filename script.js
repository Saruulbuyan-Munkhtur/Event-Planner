var input = document.getElementById("to-do-input")
var button = document.getElementById("to-do-submit")
var list = document.getElementById("to-do-list")
var listItems = list.childNodes;
var refresh = document.getElementById("to-do-refresh")

function addToList(){
    //alert("This button works!")
    if(input.value.length > 0){
        var newItem = document.createElement("LI")
        var newText = document.createTextNode(input.value)
        newItem.appendChild(newText)
        list.appendChild(newItem)
        newItem.setAttribute("class", "active")
        input.value = ""
    }
};

function enterToList(e){
    var keyCode = (window.event) ? e.which : e.keyCode;
    if(keyCode == 13){
        addToList()
    }
};

function itemClick(e) {
    e = e || window.event;
    var item = e.target || e.srcElement;
    if(item.hasAttribute("class")){
        item.removeAttribute("class") 
    }
    else{
        item.setAttribute("class", "crossed");
    }
}

function removeItem(child){
    //e = e || window.event;
    //var child = e.target || e.srcElement;
    var parent = child.parentNode;
    parent.removeChild(child);
}

function refreshList(){
    var crossedItems = list.querySelectorAll("li.crossed")
    crossedItems.forEach(crossedItem => {
        removeItem(crossedItem);
    })
}


button.addEventListener("click", addToList);
input.addEventListener("keyup", enterToList);
listItems.forEach(item => {
    item.addEventListener("click", itemClick);
})
refresh.addEventListener("click", refreshList)
