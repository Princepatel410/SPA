function square(number, callback) {
    setTimeout(() => {
        const result = number * number;
        callback(result); 
    }, 1000);
}


square(5, result => {
    console.log("Squared value:", result);
});

//callback
function ride(callback) {
    const arrived = false;
    if (arrived) {
        callback(null, "Ride has arrived");
    }
    else {
        callback("Ride was rejected", null);
    }
}
ride((error, message) => {
    if (error) {
        console.log("Error: " + error);
    }
    else {
        console.log("Success: " + message);
    }
    console.log("Ride has ended");
}
);