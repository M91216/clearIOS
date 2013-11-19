document.addEventListener("deviceready", onDeviceReady, false);

var music
var playFn
var stopFn
var networkFn
var locationFn
var onSuccessFn
var takePictureFn
var alert
var networkState
var compassFn
//pictureSource = navigator.camera.PictureSourceType;
//destinationType = navigator.camera.DestinationType;



// Cordova is ready
//
function onDeviceReady() {
 	//$("#play").on("click", playFn);
 	//$("#stop").on("click", stopFn);
 	//$("#camera").on("click", takePictureFn);
 	$("#geo").on("click", locationFn);
 	$("#network").on("click",compassFn);
 	//$("#alert").on("click", alert);
    alert("device is ready!");
    
    
    
 	//checkConnection();
}

var locationFn = function(){
    
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);
}
function handle_geolocation_query(position){
 	var element = document.getElementById("geolocation");
    
 	element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
 	'Longitude: '          + position.coords.longitude             + '<br />' +
 	'Altitude: '           + position.coords.altitude              + '<br />' +
 	'Accuracy: '           + position.coords.accuracy              + '<br />' +
 	'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
 	'Heading: '            + position.coords.heading               + '<br />' +
 	'Speed: '              + position.coords.speed                 + '<br />' +
 	'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    
}

var compassFn = function(){

  
navigator.compass.getCurrentHeading(onSuccess, onError);

}
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass Error: ' + compassError.code);
}




// device APIs are available
//


