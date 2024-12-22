const express = require('express'); // import express
const app = express();
const fs = require('fs');

// Correctly formatted JSON data as an array of objects
const jsonData = [
    {
        "Name of the Hospital": "Ananthapuri Hospital",
        "Patient count": 500,
        "Location": "Tvm"
    },
    {
        "Name of the Hospital": "KIMS",
        "Patient count": 400,
        "Location": "Tvm"
    },
    {
        "Name of the Hospital": "Aster",
        "Patient count": 300,
        "Location": "Kochi"
    }
];

// Write the JSON data to 'data.json'
fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
        console.error('Error writing file asynchronously:', err);
    } else {
        console.log('Asynchronous write completed!');
    }
});

// API route to get JSON data
app.get('/hospitals', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file asynchronously:', err);
            res.status(500).send('Error reading file');
        } else {
            res.json(JSON.parse(data)); // Respond with JSON data
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on PORT 3000");
});
