var input = document.getElementById("to-do-input")
var button = document.getElementById("to-do-submit")
var list = document.getElementById("to-do-list")

function addToList(){
    alert("This button works!")
    var newItem = document.createElement(li)
    var newText = document.createTextNode(input.value)
    newItem.appendChild(newText)
    list.appendChild(newItem)
    input.value = ""
};




button.addEventListener('click', addToList);