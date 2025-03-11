//curry function
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));
 
//2.2 
function multiFun1(){
    console.log("function1")
    return function(){
        console.log("function2")
        return function(){
            console.log("function3")
            return function(){
                console.log("function4")
            }
        }
    }
}
multiFun1()()()()  
 
//2.3
// recursion

function nestedToFlatten(arr) {
    return arr.flat(Infinity);
  }
const nestedArray = [1, [2, [3, 4]], 5, [6, [7]]];
console.log(nestedToFlatten(nestedArray));
 