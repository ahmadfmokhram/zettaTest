   
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   let {a,b} = numbers;
   let hasil = [a, b] = [b, a];
   return hasil
}
 
console.log(result(numbers));