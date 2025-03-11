function square(number, callback) {
    setTimeout(() => {
        const result = number * number;
        callback(result); 
    }, 1000);
}


square(5, result => {
    console.log("Squared value:", result);
});