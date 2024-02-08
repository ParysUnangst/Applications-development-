function checkAccess() {
    let accessLevel; // Using let to allow reassignment. If this stayed as a var the scoping would be incorrect
    let loggedIn = true;// Setting to true. This can be changed if wanted to run the loop
    let userRole= "user";
    let user = "Parys";
    if (loggedIn) {
        let message = "User " + user + " is logged in."; 
        // Once again using let as the variable will change in the scope block
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        let message = "User not logged in.";
        // using let as the variable message changed from it initial value. let is alo true for scope
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (let i = 0; i < 3; i++) {
    // Using const in this case as this loop with stay constant regardless of the previous varibles
    console.log("Attempt", i);
}

console.log("Access Level:", checkAccess());

// The let message inside the branches of if are ok but for clarity it would be best to declare message
