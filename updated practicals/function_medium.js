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

var flatenrecursion = function(arr){
    return arr.flat(Infinity);
}
const Array = [1, [2, [3, 4]], 5, [6, [7],[8]],[9]];
console.log(flatenrecursion(Array));
 
//curry function
 let mutliply = function(x,y){
    console.log(x*y);
}
let multiplyByTwo = mutliply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree = mutliply.bind(this,3);
multiplyByThree(5);


