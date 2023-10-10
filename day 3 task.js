let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let jsonString1 = JSON.stringify(obj1);
let jsonString2 = JSON.stringify(obj2);


let sortedString1 = jsonString1.split('').sort().join('');
let sortedString2 = jsonString2.split('').sort().join('');

if (sortedString1 === sortedString2) {
  console.log("The JSON objects are equivalent.");
} else {
  console.log("The JSON objects are not equivalent.");
}