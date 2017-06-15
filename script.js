var caracas = {lat: 10.4806, lng: -66.9036};
var newYork = {lat: 40.7128, lng: -74.0059};
var paris = {lat: 48.856, lng: 2.352};
var losAngeles ={lat: 34.05, lng: -118.2437};
var locations = [caracas, newYork, paris, losAngeles]

function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 3,
     center: newYork
   });


   locations.forEach(function(spot){
     var infowindow = new google.maps.InfoWindow({
            content: "THIS PLACE IS AWESOME"
     });
     var marker = new google.maps.Marker({
       position: spot,
       map: map,
       animation: google.maps.Animation.DROP,
     })
     marker.addListener("click", function(){
       infowindow.open(map, marker);
     })
   })



 }

var locationButton = document.getElementById('pinbutton')

locationButton.addEventListener("click", function() {
    var input = document.getElementById("newlocation").value;
    console.log(input);
  });
