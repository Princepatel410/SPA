//1.1
function sqr(n,callback)
{
    setTimeout(() => {
        const result = n*n;
        callback(result);
    }, 1000);
}

sqr(5,(result) => {
    console.log("square result:",result);
    
});

//1.2
function sqr(n)
{
    return new Promise((resolve)=>{

    
    setTimeout(() => {
        const result = n*n;
        resolve(result);
    }, 1000);
});
}

sqr(8).then((result) => {
    console.log("square result:",result);
    
});

//1.3
async function sqr(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}

async function getSquare() {
    const result = await sqr(9);
    console.log("Square result:", result);
}

getSquare();
