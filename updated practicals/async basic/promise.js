function square(number)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}

square(5).then(result => {
    console.log("Squared value:", result);
}
);

//promise
// const ride = new Promise((resolve, reject) => {
//   const arrived = false;
//         if(arrived)
//       {
//             resolve("Ride has arrived");
//       }
//       else
//       {
//             reject("Ride was rejected");
//       }
// });
// ride.then((message) => {
//       console.log("Success: " + message);
// })
// .catch((error) => {
//       console.log("Error: " + error); 
// })
// .finally(() => {
//       console.log("Ride has ended");
// }); 