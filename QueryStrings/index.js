//Import express and initialize the app
const express = require('express');
const app = express();
//configure the server
const PORT = process.env.PORT || 3000;

//Implement a GET route that handles query strings
app.get('/get', (req, res) =>{
    const queryParams = req.query;
    console.log('Query Parameters:', queryParams);
    res.send('Check the console for query parameters.');

});

//Error handlers
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

//start the server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});