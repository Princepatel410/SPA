// 1.1
let username = 'John Doe';
let [fname,lname] = username.split(' ');
console.log(fname); 
console.log(lname);

// 1.2
const colors = ['red', 'green', 'blue']; 
let obj = {
    red: "#FF0000",
    green:"#00FF00",
    blue: "#0000FF"
};
  console.log(obj.red);
  console.log(obj.green);   
    console.log(obj.blue);
   
// 1.3
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let str = "my name is prince patel";
let arr = str.split(" ");
let newArr = arr.map((item) => {
    return capitalize(item);
});
let newStr = newArr.join(" ");
console.log(newStr);