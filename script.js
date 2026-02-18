function increaseProgress(id) {
  let element = document.getElementById(id);
  let current = parseInt(element.innerText);

  if (current < 100) {
    current += 10;
    element.innerText = current + "%";
  } else {
    alert("Training Completed! 🎉");
  }
}