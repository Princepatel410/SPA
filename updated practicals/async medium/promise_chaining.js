function square(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}
square(5).then(result => {
    console.log("Squared value:", result);
    return result;
}
).then(result => {
    console.log("Squared value:", result);
    return result;
}
).then(result => {
    console.log("Squared value:", result);
}
);
