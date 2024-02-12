//importing the needed programming
import http from "http";
import fs from "fs";

//creating the server with the required request and response methods
http.createServer((req, res)=>{
    //Creating the variable path for the url
    const path = req.url;
    // testing the path 
    console.log(path);

    //creating the switch 
    switch(path) {
        // adding cases to the path
        case'/':


            break;
        // method for response object
        case'/about':
            //providing a status code for response with content type
            res.writeHead(200, {'content-Type': 'text/plain'});
            res.end("About Page");
            break;
        // adding a default case in the even of an error
        default:
            //adding the defaut for load error 404
            res.writeHead(404, {'content-Type': 'text/plain'});
            res.end("404 Not Found");
            break;
        

    
        

    }
//call listen on port 3000 or process.env
}).listen(process.env.PORT || 3000);