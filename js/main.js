var onDeviceReady;
document.addEventListener("deviceready", onDeviceReady, false);

var music;
var playFn;
var stopFn;
var networkFn;
var locationFn;
var onSuccessFn;
var takePictureFn;
var states;
var networkState;
var compassFn;
var src;
var alertFn;
var showConfirm;
//pictureSource = navigator.camera.PictureSourceType;
//destinationType = navigator.camera.DestinationType;



// Cordova is ready
//
function onDeviceReady() {
    //navigator.compass.getCurrentHeading(onSuccess, onError);
    $("#play").on("click", playFn);
    $("#stop").on("click", stopFn);
    //$("#camera").on("click", takePictureFn);
    $("#geo").on("click", locationFn);
    $("#compass").on("click",compassFn);
    $("#alert").on("click", alertFn);
    alert("device is ready!");
    my_media = new Media("https://files.myopera.com/beyondat/files/Trying%20on%20an%20orange%20bicycle.mp3", onSuccess, onError);
    
    
    
    
   
}

//GEOLOCATION---------------------------------------------------------------
var locationFn = function(){
  
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);
};
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



//COMPASS FUNCTION---------------------------------------------------------
var compassFn = function(){
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
};

// onSuccess: Get the current heading
//
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass Error: ' + compassError.code);
}


//NOTIFICATION FUNCTION-------------------------------------------------------
var alertFn = function() {
    function alertDismissed() {
        
    }
    navigator.notification.alert(
                                 'This Is My Alert!',  // message
                                 alertDismissed,         // callback
                                 'Michael Bain',            // title
                                 'Done'                  // buttonName
                                 );
};



//MEDIA PLAYER-----------------------------------------------------------------
 var my_media = null;

var playFn = function() {
function playAudio(src) {
    }
    // Plays audio
    my_media.play();

};

var stopFn = function() {
function stopAudio() {
}
    if (my_media) {
        my_media.stop();
    }

};


$(document).ready(function(){
                  
                  $("#sport").click(function(){
                                    
                                    
                                    $.ajax({
                                           url: "http://api.espn.com/v1/sports/news/headlines/",
                                           data: {
                                           // enter your developer api key here
                                           apikey: "zhnt7m4bemtbqt73ypfg7svy",
                                           // the type of data you're expecting back from the api
                                           _accept: "application/json"
                                           },
                                           dataType: "jsonp",
                                           success: function (data) {
                                           // create an unordered list of headlines
                                           var ul = $('<ul/>');
                                           $.each(data.headlines, function () {
                                                  var li = $('<li/>').text(this.headline);
                                                  ul.append(li)
                                                  });
                                           // append this list to the document body
                                           $('#espn').append(ul);
                                           
                                           },
                                           });
                                    
                                    alert("Hello ESPN");		
                                    });	
                  });

$("#insta").click(function(){
                  
                  var tag = "maschine";
                  var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=e79ad9e2173443deb8eea89ef21b15e9&amp;min_id=10";
                  $.getJSON(url, screenOutput);
                  });

var screenOutput = function(info){
    
    $("#data-msg").html("<h2>Search Results:</h2>");
    
    $.each(info.data, function(index, photo) {
           
           var pic = "<li><img src ='" + photo.images.thumbnail.url + "' alt='" + photo.user.id
           + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
           $("#data-output").append(pic);
           
           });
};




