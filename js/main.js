


 /*document.addEventListener("deviceready", onDeviceReady, false);
 alert("it loaded");
 };
 
function onDeviceReady() {
  
  
        alert("onDeviceReady");
  

      };*/
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



$(function(){
	$(".clickme").mousedown(function(){      
		$(this).addClass("selecionado");
	});

	$(".clickme").mouseup(function(){    
		$(this).removeClass("selecionado");
	});
	
});

