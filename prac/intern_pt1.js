let username = "john doe";
// console.log(username.split(' '));
let [fname,lname] = username.split(" ");
console.log(fname);
console.log(lname);

//1.2
const colors = ['red','green','blue'];
let obj = {
   red : "#FF0000",
   green : "#00FF00" , 
   blue :  "#0000FF"
};
console.log(obj.red);
console.log(obj.green);
console.log(obj.blue);

//1.3 
function capital(name)
{
    return name
    .split(" ")
   .map(word=>word .toUpperCase().charAt(0)+word.slice(1))
   .join(" ");
 
};
console.log(capital("this is prince form linearloop"));

//by regular expressions 
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world! this is javascript.")); 
