var input = document.getElementById("input");
var ol = document.querySelector("ol");
var button = document.getElementsByClassName("enter")[0];

function inputLength() {
  return input.value.length > 0;
}

function addTODO() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = "";
}

const addTodoAfterClick = () => {
  if (inputLength()) {
    addTODO();
  } else {
    alert("Enter Something");
  }
};

const addTodoAfterKeypress = (event) => {
  if (inputLength() && event.keyCode === 13) {
    addTODO();
  }
};

button.addEventListener("click", addTodoAfterClick);

input.addEventListener("keypress", addTodoAfterKeypress);
