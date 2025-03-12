function multiply(num)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const mul = num*3;
            resolve(mul);
        },1000)
    })
    
}

function add(num)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const add = num+10;
            resolve(add);
        },1000)
    })
}

function div(num)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const div = num/2;
            resolve(div);
        },1000)
    })
}

//promise chaining

multiply(2)
.then((result)=>
    {
    return add(result)
    })
.then((result)=>{
    return div(result)
})
.then((finalresult)=>{
    console.log(finalresult);
    
})
.catch((e)=>{
    console.log(e);
    
})