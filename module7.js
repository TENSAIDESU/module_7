//7.6.1
let word =prompt();
if (word.split("").reverse().join("") === word) {
  console.log("Слово " + word + " является палиндромом.");
} else {
  console.log("Слово " + word + " не является палиндромом.");
}
//7.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
let uniqueValues = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueValues.includes(arr[i])) {
    uniqueValues.push(arr[i]);
  }
}
console.log(uniqueValues);
//7.6.3
const inputNumber=+promt();
let numbers = Array.from(Array(inputNumber + 1), () => 0);
console.log(numbers);
//7.6.4
const field = Array.from({ length: 3 }, () => Array.from(Array(3), () => ''));
const type = {
  0: 'X',
  1: '0'
}
for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    const random= Math.round(Math.random())
    field[i][j]= `${type[random]}`
  }
}
for (const row of field) {
  console.log(row.join(''));
}
//7.6.5
const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there'
};
let arrValues=[];
Object.keys(obj).forEach(key => {
  if (Array.isArray(obj[key])) {
  arrValues.push(...obj[key]);
  } else {
  arrValues.push(obj[key])
  }
  })
  console.log(arrValues)
for (let key of obj){
arrValues.push(obj[key]);
}
console.log(arrValues)