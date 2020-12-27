// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
const port = 3333;
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {console.log("server is running... listening to port $(port)");});
                 
app.get('/getData', (req, res) => {
    //replace url with a string of the get route url
    //code to send res data of endpoint object
    res.send(projectData)
    })
app.post('/postData', (req, res) => {
        //replace url with a string of the post route url
        //code to add data to endpoint object
    projectData.temp = req.body.temp
    });
