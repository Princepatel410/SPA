// function square(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const result = num*num;
//             resolve(`${result} success`);
//         },1000)
       
//     })
// }
// square(3).then((p)=>{console.log(p)});

// //callbacks
// function sq(number,callback)
// {
//     setTimeout(()=>{
//         const result = number*number;
//         callback(result);
//     },1000)
// }
// sq(2,result => {console.log("ans:",result);
// })

// //async/await

// async function sqr(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let ans = number * number;
//             resolve(`${ans} `)
//         },1000)
//     })

// }

// async function triple() {
//    let result1 =  await sqr(4)
//    console.log(result1);
   

// }

// triple();

//iteration
async function* gen() {
    
    let count = 0;
    while(true)
    {
     await new Promise(resolve=> setTimeout(resolve,1000));
        yield count++;
      
    }
}

(async()=> {
    for await(let values of gen())
    {
        console.log(values);

        if(values>=5) break;
        
    }
})();