//2.1
function curry(arg) {
    return function curried(...args)
    {
        if (args.length>=arg.length) 
        {
            return arg,apply(this,args);
        }
        else
        {
            return (...nextArgs) => curried(...args,...nextArgs);
        }
    };
}

function add (a,b,c)
{
    return a+b+c;
}
const curriedApp = curry(add);
console.log(curriedApp(1)(2)(3));

//2.2
const compose = (...functions) => (initialValue) =>
    functions.reduceRight((acc, fn) => fn(acc), initialValue);
  
  // Example usage:
  const add = (x) => x + 2;
  const multiply = (x) => x * 3;
  const square = (x) => x * x;
  
  const composedFunction = compose(square, multiply, add);
  
  console.log(composedFunction(2));

  //2.3
  const flattenArray = (arr) => {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
  };
  
  // Example usage:
  const nestedArray = [1, [2, [3, 4], 5], 6];
  console.log(flattenArray(nestedArray))
