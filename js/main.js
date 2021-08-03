/*
-----------------------------------------------
Theme: myBaby - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() { 
   "use strict";   
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
}); 
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function() {
   "use strict";   

    var content = $("body"),
      navbar = $(".navbar"),
      col = $(".col-transform");

    $(".show-info").on('click', function() { 
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          content.removeClass('show-content');
            navbar.removeClass('navbar-open');
        } else {
          content.addClass('show-content');
            navbar.addClass('navbar-open');
        }
      }
    });
    
    // Gallery Lightbox
    $(".bearr-gallery-item a").simpleLightbox();   
    
    $('.love-story-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000
	});
    
    //Google maps
	//Map
/*	var map;
	var odessa = new google.maps.LatLng(46.45879177, 30.73738575);

	var MY_MAPTYPE_ID = 'custom_style';

	function initialize() {
	    //Start options
	    var featureOpts = 
	    [
	    {
	        "featureType": "landscape",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "stylers": [
	            {
	                "hue": "#00aaff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "gamma": 2.15
	            },
	            {
	                "lightness": 12
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 24
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "lightness": 57
	            }
	        ]
	    }
	    ];
	    //END options

	    //END maps options
	    var mapOptions = {
	        zoom: 14,
	        center: odessa,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	        },
	        mapTypeId: MY_MAPTYPE_ID
	    };
	    //END maps options
	    
	    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	    var styledMapOptions = {
	        name: 'Custom Style'
	    };
	    var customMapType_hospital = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	    map.mapTypes.set(MY_MAPTYPE_ID, customMapType_hospital);
	    
	    //marker hospital
	    var image_hospital  = new google.maps.MarkerImage("static/img/marker-hospital.png", null, null, null, new google.maps.Size(33,50));
	    var positionpin_hospital  = new google.maps.LatLng(46.45846658, 30.73616266);
	    var marker_hospital  = new google.maps.Marker({
	      position: positionpin_hospital ,
	      icon: image_hospital ,
	      map: map,
	      flat: true,
	      title: ''
	    });
	    var boxText_hospital = document.createElement("div");
	    boxText_hospital.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4>hospital</h4><h5>55 Red Avenue, 2</h5></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-hospital.jpg"></div>';
	    var marker_hospital_options = {
	         content: boxText_hospital
	        ,disableAutoPan: false
	        ,maxWidth: 0
	        ,pixelOffset: new google.maps.Size(-127, -160)
	        ,zIndex: null
	        ,boxStyle: { 
	          opacity: 1,
	          width: "250px",
	          background: "#fff",
	         }
	        ,closeBoxMargin: "10px"
	        ,closeBoxURL: "static/img/map-close.png"
	        ,infoBoxClearance: new google.maps.Size(1, 1)
	        ,isHidden: false
	        ,pane: "floatPane"
	        ,enableEventPropagation: false
	    };
		var info_box_hospital = new InfoBox(marker_hospital_options);
	    google.maps.event.addListener(marker_hospital, 'click', function() {
	        info_box_hospital.open(map,marker_hospital);
	    });
	    info_box_hospital.open(map,marker_hospital);
	    //end marker hospital
	    
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	//END GOOGLE MAPS  */
	/*========== Countdown start ================*/
		var end_date = +new Date("December 28, 2021 23:55 CST");
		var date_now = new Date();
		var seconds = Math.floor((end_date - (date_now))/1000);
		$('.countdown').final_countdown({
	        'start': null,
	        'end': seconds,
	        'now': null        
	    });      
	/*========== Countdown end ================*/
}); 