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
// function initMap() {
//     // Your map initialization code here
//     const mapElement = document.getElementById("map");
//     const locationInput = document.getElementById("locationInput").value;

//     // You can use a geocoding service to convert the input into coordinates.
//     // For this example, we'll use a placeholder data.
//     const latitude = 37.7749;
//     const longitude = -122.4194;

//     const map = new google.maps.Map(mapElement, {
//         center: { lat: latitude, lng: longitude },
//         zoom: 10, // Adjust the zoom level as needed
//     });

//     // You can add a zoom-in animation using the setZoom method.
//     map.setZoom(14);
// }

// function showLocation() {
//     initMap();
// }