let modalWrapper = document.getElementById("modal-wrapper");
let seeMoreButton = document.getElementById("seeMore");
const baseURL = "http://34.235.111.110:5000";

seeMoreButton.onclick = function() {
  modalWrapper.style.display = "block";
};
modalWrapper.onclick = () => {
  modalWrapper.style.display = "none";
};
let modalContent = document.getElementById('modal-content')
modalContent.onclick = function(event) {
  event.stopPropagation()
}


// -------------------------------------

function goToGitHub(){
  open("https://github.com/GairikSharma/Prediction_model", "_BLANK")
}

function getBathValue() {
  let uiBathrooms = document.getElementsByName("uiBathrooms");
  for (let i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  let uiBHK = document.getElementsByName("uiBHK");
  for (let i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  let sqft = document.getElementById("uiSqft");
  let bhk = getBHKValue();
  let bathrooms = getBathValue();
  let location = document.getElementById("uiLocations");
  let estPrice = document.getElementById("uiEstimatedPrice");

  $.ajax({
    type: "POST",
    url: `${baseURL}/predict_home_price`,
    data: {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
    },
    beforeSend: function() {
      $(".submit").prop("disabled", true)
      $(".submit").html(`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>`)
    },
    success: function(data) {
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
    },
    complete: function() {
      $(".submit").prop("disabled", false)
      $(".submit").html("Estimate Price")
    }
  })
}

function onPageLoad() {
  let url = `${baseURL}/get_location_names`;
  $.get(url, function(data, status) {
    if (data) {
      let locations = data.locations;
      let uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      for (let i in locations) {
        let opt = new Option(locations[i]);
        $('#uiLocations').append(opt);
      }
    }
  });
}

window.onload = onPageLoad;
