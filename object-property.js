const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'DeepJol'},
    {id: 71, name: 'Skib Khan'}
];
// const output=[];

// for (let i=0; i<students.length; i++){
//     const element = students[i].name;
//     output.push(element);
// }

// console.log(output);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter (s =>s.id>40);
const biggerOne = students.find (s =>s.id>40);
console.log(biggerOne);

