const a=5
const b=9

if (a === b){
    console.log(true)
}else {
    console.log(false)
}


function calculate(fahrenheit){
if(typeof fahrenheit != 'number'){
    return false 
}

return celsius = (fahrenheit - 32) * 5/9;
}

console.log(calculate (95))
console.log(calculate ("gio"))



function calculator (a, b, operation) {
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
  }
  
  console.log(calculator(10, 10, "+"));
  console.log(calculator(10, 10, "-"));  
  console.log(calculator(10, 10, "*"));  
  console.log(calculator(10, 10, "/"));