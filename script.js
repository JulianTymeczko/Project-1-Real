















// Here Sam is working out his fetch
//airbb has alot of query items we could possibly use.
var airBBLocal = 'paris';
var airBBCheckIn;
var airBBCheckOut;
var airBBCurrency;
var airBBAdults;
var airBBURL = 'https://airbnb13.p.rapidapi.com/search-location?location=' + airBBLocal + '&checkin=' + airBBCheckIn + '&checkout=' + airBBCheckOut + '&adults=' + airBBAdults + '&page=1&currency=' + airBBCurrency;
fetch(airBBURL)
    .then(function (response) { return response.json(); })
    .then(function (airBBData) {
        console.log('airBB data below: ');
        console.log(airBBData);
    });