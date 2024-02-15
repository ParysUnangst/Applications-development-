const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/foo", (req, res, next) => {
    const choice = Math.random();
    if (choice < 0.5) {
        console.log("sometimes this");
        next(); // Passing control to the next applicable route
    } else {
        console.log("sometimes that");
        res.send("sometimes that");
    }
});

app.get("/foo", (req, res) => {
    res.send("and sometimes that");
});

// 404 Error Handler
app.use((req, res, next) => {
    res.status(404).send("404 - Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
