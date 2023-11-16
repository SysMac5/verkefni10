function allowDrop(ev) {
  ev.preventDefault();
}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let image = document.getElementById(data)
  if (!(image === ev.target)) {
    ev.target.appendChild(image);
  }
}

export { allowDrop, drag, drop };