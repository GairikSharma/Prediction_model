var modalWrapper = document.getElementById("modal-wrapper");
var seeMoreButton = document.getElementById("seeMore");
seeMoreButton.onclick = function () {
  modalWrapper.style.display = "block";
};
modalWrapper.onclick = () => {
  modalWrapper.style.display = "none";
};
var modalContent = document.getElementById('modal-content')
modalContent.onclick = function (event) {
  event.stopPropagation()
}