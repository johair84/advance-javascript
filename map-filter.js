const numbers = [3,4,5,6,7,8];
// // const output = [];

// // for(let i = 0; i < numbers.length; i++){
// //     const element = numbers[i];
// //     const result = element * element;
// //     output.push(result);
// // }

// //using Map

// function square(element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;
// const result = numbers.map(function(element, index, array){
//     return element * element;
// })

// const result = numbers.map(x => x * x);
// console.log(result);

// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);


//map and filter arrray dibe 
// find only element dibe