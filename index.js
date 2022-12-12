const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

// const corsOptions ={
//    origin:'http://localhost:3000', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration

// app.post('/api', (request, response) => {
//    console.log('I got a request')
//    console.log(request.body);
//    const data = request.body;
//    response.json({
//      status: "success",
//      latitude: data.lat,
//      longitude: data.long
//    })
//  });