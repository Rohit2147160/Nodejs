var express = require('express');
var app = express();
const appRouter = (app,fs) => {};
module.exports = appRouter;


const fs = require("fs");
const { callbackify } = require("util");

// Read users.json file
fs.readFile("flight.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const flights = JSON.parse(data);

    console.log(flights); // Print users
});



var newFlightDetails = {
    "flightNO": 8877,
    "date": "2022-02-22",
    "source": "Ahmedabad",
    "destination": "Delhi",
    "fare": 4570,
    "noofseats": 22,
    "airLineName": "Vistara"
}



fs.writeFile("newflight3.json", JSON.stringify(newFlightDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})

//routing feature
var http = require('http');

// Create a server object
http.createServer(function (req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/about') {

       
        fs.readFile("flight.json",'utf8',(err,data)=>{
            if (err) throw err;
            res.send(JSON.parse(data));
        })
        res.write("This is the about page.");

        res.end();
    }
    else if (url === '/contact') {
        res.write('Thank you for showing interest in us. For contacting us drop a mail at rohitp2203@gmail.com, or leave a text at 6355380271');
        res.end();
    }
    else {
        res.write('Hello World!. Welcome to Royalaviation. A Flight Booking Web Application. We offer discounts for our soldiers and their families');
        res.end();
    }
}).listen(3000, function () {

    // The server object listens on port 3000
    console.log("Server started at port 3000");
});