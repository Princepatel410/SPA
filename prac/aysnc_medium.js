//2.1
function sqr(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}

sqr(2)
    .then(result => {
        console.log("First square result:", result);
        return sqr(result);
    })
    .then(result => {
        console.log("Second square result:", result);
        return sqr(result);
    })
    .then(result => {
        console.log("Third square result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });


    //2.2
    const apis = ['https://api.example1.com', 'https://api.example2.com', 'https://api.example3.com']; 

    function fetchDataFromAPIs() {
        const api1 = fetch('https://api.example.com/data1').then(response => response.json());
        const api2 = fetch('https://api.example.com/data2').then(response => response.json());
        const api3 = fetch('https://api.example.com/data3').then(response => response.json());
    
        Promise.all([api1, api2, api3])
            .then(results => {
                console.log("API 1 Data:", results[0]);
                console.log("API 2 Data:", results[1]);
                console.log("API 3 Data:", results[2]);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
    
    fetchDataFromAPIs();

    //2.3
    async function* asyncGenerator() {
        let num = 1;
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield num++;
        }
    }
    
    async function consumeGenerator() {
        const generator = asyncGenerator();
        for await (const value of generator) {
            console.log("Generated value:", value);
        }
    }
    
    consumeGenerator();
    