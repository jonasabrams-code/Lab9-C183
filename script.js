mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXMtYWJyYW1zIiwiYSI6ImNtZ3pybHowdTAzMmoyaXB1MjJzMTJqdTQifQ.bM0zSYU6jm62s-irXnGMkA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/jonas-abrams/cmh9sq16000a501race4i5068', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });