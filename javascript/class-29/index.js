// var h1 = document.getElementById("h1");

// console.log(h1.attributes[1].nodeName);
// console.log(h1.attributes[1].nodeValue);

// Adding nodes

// var ol = document.getElementById("list");

// var li = document.createElement("li");
// var text = document.createTextNode("My First Li")
// li.appendChild(text);

// var a = document.createElement("a");
// var linkText = document.createTextNode("Visit my website ")
// a.appendChild(linkText)
// a.setAttribute("href", "#")
// li.appendChild(a);

// ol.appendChild(li);

// /////////////// Todo App

var newTask = document.getElementById("newTask");
var ul = document.getElementById("ul");

function addItem() {
  // console.log(newTask.value);
  if (newTask.value === "") {
    alert("Please Enter your task");
  } else {
    // console.log(newTask.value);
    var li = document.createElement("li");
    var liText = document.createTextNode(newTask.value);
    li.setAttribute("class", "task")
    li.appendChild(liText);

    // edit task btn
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("EDIT");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editTask(this)");
    li.appendChild(editBtn);

    // delete task btn
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("DELETE");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "deleteTask(this)");
    li.appendChild(delBtn);

    ul.appendChild(li);
    newTask.value = ""
  }
}

function deleteAll() {
  ul.innerHTML = "";
}

function editTask(editBtn) {
  // console.log(editBtn.parentNode.firstChild.nodeValue);
  var oldVal = editBtn.parentNode.firstChild.nodeValue;
  var newVal = prompt("Edit Task", oldVal);
  // console.log(newVal);
  editBtn.parentNode.firstChild.nodeValue = newVal;
}


function deleteTask (delBtn){
delBtn.parentNode.remove()
}





 