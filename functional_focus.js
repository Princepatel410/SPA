function area()
{
    let r = 4;
    let area_c = 2*3.14*r*r;
    console.log(area_c);
    
}
area();

//higher order function 1.2
let higher = fun => (...args) => (
    console.log("input:",args),
    console.log("output:",fun(...args))
    
    
);


//1.3
// const orignalArray = [1,2,3,4,5];

function addelement(arr,element)
{
    return[...arr,element];
}

const orignalArray = [1,2,3];
const newarray = addelement(orignalArray,4);

console.log(orignalArray);
console.log(newarray);


