
function initMap() {

// Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#ebe3cd"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#523735"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#f5f1e6"
					}
				  ]
				},
				{
				  "featureType": "administrative",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#c9b2a6"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#dcd2be"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#ae9e90"
					}
				  ]
				},
				{
				  "featureType": "landscape.natural",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dfd2ae"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dfd2ae"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#93817c"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#97b968"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#447430"
					}
				  ]
				},
				{
				  "featureType": "poi.school",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#c2c899"
					}
				  ]
				},
				{
				  "featureType": "poi.school",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#b49647"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#f5f1e6"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#cbbe4b"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#f8c967"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#e9bc62"
					}
				  ]
				},
				{
				  "featureType": "road.highway.controlled_access",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e98d58"
					}
				  ]
				},
				{
				  "featureType": "road.highway.controlled_access",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#db8555"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#7e6961"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dfd2ae"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#8f7d77"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#ebe3cd"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dfd2ae"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#b7d9e8"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#92998d"
					}
				  ]
				}
			  ],
            {name: 'Styled Map'});

// Create a map object, and include the MapTypeId to add
		// to the map type control.

	var center = {lat:50.548081, lng: 30.229724};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 15,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
		}
		});	
		var image = {
			url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png',
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(23, 35),
			scaledSize: new google.maps.Size(45, 45)
		  };

		// створення popup

		var div = document.createElement('div');
		div.classList.add('popup_map');
		var img = document.createElement('img');
		img.setAttribute('src', 'img/parallax/3.jpg');
		var h5 = document.createElement('h5');
		div.append(img);
		div.append(h5);
		h5.innerHTML = 'Ideal House';
		document.body.append(div);

		var infowindow = new google.maps.InfoWindow({
			position: center,
			map: map,
			content: div
		});
	
 //Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');

	// Define the LatLng coordinates for the polygon's path.
	var triangleCoords = [
		{lat: 50.547926, lng: 30.229411},
		{lat: 50.547871, lng: 30.229474}, 
		{lat: 50.548083, lng: 30.229917},
		{lat: 50.548134, lng: 30.229843},
		{lat: 50.547926, lng: 30.229411}
	];

	// Construct the polygon.
	var bermudaTriangle = new google.maps.Polygon({
		paths: triangleCoords,
		strokeColor: 'ffffff',
		strokeOpacity: 0.4,
		strokeWeight: 1.5,
		fillColor: '#b49756',
		fillOpacity: 0.8
	});
	bermudaTriangle.setMap(map);

	};