var modalWrapper = document.getElementById("modal-wrapper");
var seeMoreButton = document.getElementById("seeMore");
seeMoreButton.onclick = function () {
  modalWrapper.style.display = 'block'
}
var closeButton = document.getElementById("close");
closeButton.onclick = function () {
  modalWrapper.style.display = 'none'
}