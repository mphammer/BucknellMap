var map;
var MY_MAPTYPE_ID = 'custom_style';
var bucknellLoc = new google.maps.LatLng(40.954667, -76.883584);
var coleman = new google.maps.LatLng(40.954360, -76.884114);
var library = new google.maps.LatLng(40.954417, -76.882799);
var olin = new google.maps.LatLng(40.955555, -76.882743);
var dana = new google.maps.LatLng(40.955223, -76.881780);
var breakiron = new google.maps.LatLng(40.954887, -76.881284);
var rooke = new google.maps.LatLng(40.955997, -76.883184);
var oleary = new google.maps.LatLng(40.956001, -76.882486);
var carnege = new google.maps.LatLng(40.956188, -76.881773);
var observatory = new google.maps.LatLng(40.951512, -76.883189);
var enviroCenter = new google.maps.LatLng(40.951363, -76.882615);
var artBuilding = new google.maps.LatLng(40.958059, -76.883860);

var DU = new google.maps.LatLng(40.954615, -76.881997);

var swartz = new google.maps.LatLng(40.953443, -76.883697);
var mcDonnell = new google.maps.LatLng(40.952702, -76.884116);
var smith = new google.maps.LatLng(40.958382, -76.885414);
var vedder = new google.maps.LatLng(40.958855, -76.884539);
var hunt = new google.maps.LatLng(40.958908, -76.883595);
var larison = new google.maps.LatLng(40.959577, -76.884293);
var harris = new google.maps.LatLng(40.959346, -76.883740);
var stGeorge = new google.maps.LatLng(40.960849, -76.883477);
var hulley = new google.maps.LatLng(40.960217, -76.884443);
var leiser = new google.maps.LatLng(40.960075, -76.884781);
var martin = new google.maps.LatLng(40.959980, -76.884979);
var galloway = new google.maps.LatLng(40.959603, -76.885457);
var newman = new google.maps.LatLng(40.959459, -76.885733);
var fellowship = new google.maps.LatLng(40.959354, -76.886068);
var ward = new google.maps.LatLng(40.959350, -76.885323);
var taylor = new google.maps.LatLng(40.959088, -76.885690);
var spratt = new google.maps.LatLng(40.958027, -76.886306);
var trax = new google.maps.LatLng(40.956257, -76.880893);
var roberts = new google.maps.LatLng(40.956682, -76.881494);

var seventhSt = new google.maps.LatLng(40.957829, -76.884766);
var pSafe = new google.maps.LatLng(40.956305, -76.879600);
var health = new google.maps.LatLng(40.956107, -76.879600);
var stadium = new google.maps.LatLng(40.951877, -76.885437);
var weisCenter = new google.maps.LatLng(40.953716, -76.885308);
var chapel = new google.maps.LatLng(40.954551, -76.886241);
var caf = new google.maps.LatLng(40.956528, -76.884535);

//var  = new google.maps.LatLng();

var markerList = [artBuilding];

function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var featureOpts = [
		{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
				{ color: '#658DE6' }
				]
			 },
			 {
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [
				{ color: '#FFFFFF' }
				]
			 },
			 {
			 	featureType: 'road',
			 	elementType: 'geometry',
			 	stylers: [
			 		{ color: '#171717'}
			 	]
			 },
			 {
				featureType: 'road',
				elementType: 'labels.text.stroke',
				stylers: [
				{ color: '#FFFFFF' }
				]
			 },
			 {
			 	featureType: 'landscape', //buildings
			 	elementType: 'geometry',
			 	stylers: [
			 		{ color: '#DB5800' }
			 	]
			 },
			 {
				featureType: 'landscape',
				elementType: 'labels.text.stroke',
				stylers: [
				{ color: '#FFFFFF' }
				]
			 },
			 {
			 	featureType: 'poi', //land
			 	elementType: 'geometry',
			 	stylers: [
			 		{ color: '#193C8A' }
			 	]
			 },
			 {
				featureType: 'poi',
				elementType: 'labels.text',
				stylers: [
				{ visibility: "off" }
				]
			 }
			];

	var mapOptions = {
		center: bucknellLoc,
		zoom: 17,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(mapCanvas, mapOptions);

	var styledMapOptions = {
		name: 'B-Map'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	var i;
	for (i = 0; i < markerList.length; i++) {
		displayMarker(markerList[i]);
	}
	displayMap();
}


google.maps.event.addDomListener(window, 'load', initialize);

function displayMarker(latAndLng) {
	marker = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position:latAndLng
	});
}

function addMarker(markLatLng){
	markerList.push(markLatLng);
}

function displayMap() {
	document.getElementById("webFrame").style.display = 'none';
	document.getElementById("map-canvas").style.display = 'inline-block';
	document.getElementById("sideBarDisplay").innerHTML = "Map";
}

function displayLink(sDisplay) {
	document.getElementById("map-canvas").style.display = 'none';
	document.getElementById("webFrame").style.display = 'inline-block';
	document.getElementById("sideBarDisplay").innerHTML = sDisplay;
}
