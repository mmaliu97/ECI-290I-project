// var Arr = []

const mymap = L.map('checkinMap').setView([37.7783, -119.4179], 6);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
// navigator.geolocation.getCurrentPosition( async (position) => {

//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;

//     var bikeIcon = L.icon({
//             iconUrl: 'bike1.png',
//             iconSize: [50, 32],
//             iconAnchor: [25, 16],
//         });
//     const marker_bike =  L.marker(my_lat, my_lon, {icon: bikeIcon}).addTo(mymap);

// })




if ("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition( async (position) => {

        const my_lat = position.coords.latitude;
        const my_lon = position.coords.longitude;
        
        document.getElementById("latitude").textContent = my_lat;
        document.getElementById("longitude").textContent = my_lon;
            
        var min_index = 0
        var lowestdist = 9999999
        fetch("http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/?format=json")
        /* console.log('itworked') */
        .then(res => res.json())
        .then (data => {for (let i = 0; i < data.length; i ++) {
            dist = distance(my_lat,my_lon, data[i].latitude, data[i].longitude, 'K')
            
            if (dist < lowestdist) {
                lowestdist = dist
                min_index = i
            } else {
                lowestdist = lowestdist
            }
            
        } 
        // console.log(data.latitude)
        let min_dist = distance(my_lat,my_lon, data[min_index].latitude, data[min_index].longitude, 'K')
        console.log(`the bike park is ${min_dist} away and at ${data[min_index].name}`)
        document.getElementById("bike_park").textContent = data[min_index].name;
        document.getElementById("min_dist").textContent = min_dist;
        const marker = L.marker([data[min_index].latitude, data[min_index].longitude]).addTo(mymap);

        
        
    } 
        )
       
        // }
          

    })
}
// console.log(Arr)


function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }