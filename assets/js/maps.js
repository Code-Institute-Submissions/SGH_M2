// function initMap() {
//   // Styles a map in night mode.
//   const myLatLng = { lat: 51.494805, lng: -0.177363 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: myLatLng,
//     zoom: 15,
//     styles: [
//       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{ color: "#263c3f" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#6b9a76" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ color: "#38414e" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#212a37" }],
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9ca5b3" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{ color: "#746855" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#1f2835" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#f3d19c" }],
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{ color: "#2f3948" }],
//       },
//       {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#17263c" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#515c6d" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{ color: "#17263c" }],
//       },
//     ],
//   });
//   var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     icon: iconBase + "homegardenbusiness_maps.png",
//     title: "SELSEY HOUSE!",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.496729, lng: -0.176354 },
//     map,
//     icon: iconBase + "arts_maps.png",
//     title: "Natural History Museum! Cromwell Rd, South Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.494154, lng: -0.173965 },
//     map,
//     icon: iconBase + "subway_maps.png",
//     title: "SOUTH KENSINGTON STATION, South Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.494712, lng: -0.174313 },
//     map,
//     icon: iconBase + "bars_maps.png",
//     title: "Hoop & Toy, Thurloe Pl, South Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.496175, lng: -0.174463 },
//     map,
//     icon: iconBase + "ski_maps.png",
//     title: "Natural History Museum Ice Rink, South Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.495541, lng: -0.188207 },
//     map,
//     icon: iconBase + "grocery_maps.png",
//     title: "Sainsbury's, Cromwell Rd, Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.49439, lng: -0.182728 },
//     map,
//     icon: iconBase + "subway_maps.png",
//     title: "Gloucester Road Station, South Kensington",
//   });
//   new google.maps.Marker({
//     position: { lat: 51.494052, lng: -0.169114 },
//     map,
//     icon: iconBase + "dining_maps.png",
//     title: "Restaurant Ours, Brompton Rd, South Kensington",
//   });
// }

function initMap() {
  // Styles a map in night mode.
  const myLatLng = { lat: 51.494805, lng: -0.177363 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  });
  var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: iconBase + "homegardenbusiness_maps.png",
    title: "SELSEY HOUSE!",
  });
  new google.maps.Marker({
    position: { lat: 51.496729, lng: -0.176354 },
    map,
    icon: iconBase + "arts_maps.png",
    title: "Natural History Museum! Cromwell Rd, South Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.494154, lng: -0.173965 },
    map,
    icon: iconBase + "subway_maps.png",
    title: "SOUTH KENSINGTON STATION, South Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.494712, lng: -0.174313 },
    map,
    icon: iconBase + "bars_maps.png",
    title: "Hoop & Toy, Thurloe Pl, South Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.496175, lng: -0.174463 },
    map,
    icon: iconBase + "ski_maps.png",
    title: "Natural History Museum Ice Rink, South Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.495541, lng: -0.188207 },
    map,
    icon: iconBase + "grocery_maps.png",
    title: "Sainsbury's, Cromwell Rd, Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.49439, lng: -0.182728 },
    map,
    icon: iconBase + "subway_maps.png",
    title: "Gloucester Road Station, South Kensington",
  });
  new google.maps.Marker({
    position: { lat: 51.494052, lng: -0.169114 },
    map,
    icon: iconBase + "dining_maps.png",
    title: "Restaurant Ours, Brompton Rd, South Kensington",
  });
}
