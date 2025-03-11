function area()
{
    const pi = 3.14;
    let radius = 5;
    let area = pi * radius * radius;
    console.log(area);
}
area();

//higher order function

//imumutability


function addarray(originalarray, ...newelement) {
    return [...originalarray,...newelement];
}

const numbers = [1, 2, 3,4,5];
const newnumber = addarray(numbers,6,7,8,9,10);``

console.log(numbers);      
console.log(newnumber);   
