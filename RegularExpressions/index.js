// creating the main application file and import express to initialize the app
const express = require('express');
const app = express();
//configure the server to listen
const PORT = process.env.PORT || 3000;

// create a route that uses a regular expression to match multiple URL patterns
app.get('/user(name)?', (req, res) => {
    const username = req.params[0] || 'default';
    res.send(`Hello, ${username}!`);

});


//Implement a 404 error handler for undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

//Command to start the server
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});

