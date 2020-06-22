var input = document.getElementById("to-do-input")
var button = document.getElementById("to-do-submit")
var list = document.getElementById("to-do-list")
var listItems = list.querySelectorAll("li")

function addToList(){
    //alert("This button works!")
    if(input.value.length > 0){
        var newItem = document.createElement("LI")
        var newText = document.createTextNode(input.value)
        newItem.appendChild(newText)
        list.appendChild(newItem)
        input.value = ""
    }
};

function enterToList(e){
    var keyCode = (window.event) ? e.which : e.keyCode;
    if(keyCode == 13){
        addToList()
    }
};

function crossItem(item) {
    alert("It works")
    var itemText = item.innerHtml
    item.innerHtml = "<del>" + itemText + "</del>" 
}


button.addEventListener("click", addToList);
input.addEventListener("keyup", enterToList);
listItems.forEach(item => {
    item.addEventListener("click", crossItem)
})
