var initialState;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  event.target.classList.add("dragging");
  document.getElementById("message").style.display = "block";
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("message").style.display = "none";
  resetDraggedItemColor();

  if (event.target.id === "container2") {
    document.getElementById("successMessage").style.display = "block";
    initialState = document.getElementById("container1").cloneNode(true);
    setTimeout(function() {
      document.getElementById("successMessage").style.display = "none";
    }, 2000);
  }
}

function resetDraggedItemColor() {
  var draggedItem = document.querySelector(".item.dragging");
  if (draggedItem) {
    draggedItem.classList.remove("dragging");
  }
}

function resetState() {
    location.reload();
}