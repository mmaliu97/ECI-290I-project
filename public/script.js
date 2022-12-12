var form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if ("geolocation" in navigator) {
            console.log("geolocation available");
            navigator.geolocation.getCurrentPosition( async (position) => {

                var name = document.getElementById('name').value
                var parking_type = document.getElementById('parking_type').value
                var num_parks = document.getElementById('bike_park').value
                // console.log(document.getElementById('name').value)

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log(position.coords.latitude)
                document.getElementById("latitude").textContent = lat;
                document.getElementById("longitude").textContent = lon;
                console.log(lat,lon)
            
            
                fetch("http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "latitude": lat,
                    "longitude": lon,
                    "number_of_spaces": num_parks,
                    "parking_type": parking_type,
                    
                }), 
                })
                .then((response) => {
                        return response.json()
                })
                .then((data) => {
                    console.log(data)
                })
        })
    }
})







// // defining function for button

// fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/', {
//           method: 'POST',
//           mode: 'cors',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               id: 69,
//               latitude: 37.879808,
//               longitude: -122.2705152,
//               number_of_spaces: 4

//           })
//       })
//       .then(data => console.log(data))
//       .catch(error => console.log('Error'))

// function fn1(){
//   var int = document.getElementById("num_bp").value
//   // var str = document.getElementById("poi").value;
//   if ("geolocation" in navigator) {
//     console.log("geolocation available");
//     navigator.geolocation.getCurrentPosition( async (position) => {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
//       document.getElementById("latitude").textContent = lat;
//       document.getElementById("longitude").textContent = lon;
//       console.log(int,lat,lon)


//       fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/', {
//           method: 'POST',
//           mode: 'cors',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               id: 69,
//               latitude: 37.879808,
//               longitude: -122.2705152,
//               number_of_spaces: 4

//           })
//       })
//       .then(function(response){
//         return response.json()
//       })
//       .then(function(data){
//         console.log(data)
//       })
//       // const response = await fetch("/api", options);
//       // const json = await response.json();
//       // console.log(json);



//     });
//   } else {
//     console.log("geolocation not available");
// }
// }


// // var num_bike = fn1()
// // console.log(num_bike)
// // if ("geolocation" in navigator) {
// //     console.log("geolocation available");
// //     navigator.geolocation.getCurrentPosition((position) => {
// //         const lat = position.coords.latitude;
// //         const lon = position.coords.longitude;
// //         document.getElementById("latitude").textContent = lat;
// //         document.getElementById("longitude").textContent = lon;
// //         var int = document.getElementById("num_bp").value
// //         console.log(int)
//       // console.log(position);

//       // fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'application/json'
//       //     },
//       //     body: JSON.stringify({
//       //         id: 'my house lol',
//       //         latitude: lat,
//       //         longitude: lon,

//       //     })
//       // })
// //     });
// //   } else {
// //     console.log("geolocation not available");
// // }

// // fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/', {
// //     method: 'POST',
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //         id: 'DAVIS HALL',
// //         latitude: '37.874765',
// //         longitude: '-122.2582162',

// //     })
// // })
    

// // }).then(res => {
// //     return res.json()
// // })
// //     .then(data => console.log(data))
// //     .catch(error => console.log('ERROR'))

// // fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/', {
// //     method: 'GET',
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //         id: 'DAVIS HALL',
// //         latitude: '37.874765',
// //         longitude: '-122.2582162',

// //     })
// // fetch('http://bikeley-api.eba-msiedrdm.us-west-1.elasticbeanstalk.com/v1/locations/?format=json')
// // .then((response) => response.json())
// // .then((data) => console.log(data));