async function square(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}

async function main() {
    const result = await square(5);
    console.log("Squared value:", result);
}