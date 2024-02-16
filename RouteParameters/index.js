//import express and initialize the app
const express = require('express');
const app = express();
// configure the server to listen to default port or 3000
const PORT = process.env.PORT || 3000;

//implement a route with a parameter in its path
app.get('/user/:username', (req,res) => {
    const username = req.params.username;
    res.send(`Hello, ${username}!`);
});

//createing a 404 error handler for undefines routes
app.use((req, res) =>{
    res.status(404).send('404 - Not Found');
});

//start the server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
