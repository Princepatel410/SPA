async function* asyncCounter() {
    let count = 0;
    while (true) {
        yield count++;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    for await (const number of asyncCounter()) {
        console.log(number);
    }
}
)();
