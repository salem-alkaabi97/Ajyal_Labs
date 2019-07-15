var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var ourButton = document.getElementById("our-button");
for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
  ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", createNewItem);

