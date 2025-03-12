async function square(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number * number;
            console.log(result);
            
            resolve(result);
        }, 1000);
    });
}

async function main() {
    const result = await square(5);
    console.log("Squared value:", result);
}
main();

//async await
//  async function ride() {
//     return new Promise((resolve, reject) => {
//         const arrived = false;
//         if (arrived) {
//             resolve("Ride has arrived");
//         }
//         else {
//             reject("Ride was rejected");
//         }
//     }); 
// }
// async function main1() {
//     try {
//         const message = await ride();
//         console.log("Success: " + message);
//     }
//     catch (error) {
//         console.log("Error: " + error);
//     }
//     finally {
//         console.log("Ride has ended");
//     }
// }  

