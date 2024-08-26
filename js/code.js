// Вивести повідомлення в консоль
console.log("JavaScript is working!");
console.log("Me first code!");
console.log("Mango");

// Вивести повідомлення на сторінку
document.getElementById("output").innerText = "JavaScript is working!";
document.getElementById("put").innerText = "Me first code!";
document.getElementById("mango").innerText = "Mango";

let username = "Poly";
console.log(username);
document.getElementById("poly").innerText = "Poly";

username = "Mark";
console.log(username);
document.getElementById("mark").innerText = "Mark";

//Модуль 1. Оператори порівняння
// Метод Number.parseFloat()
const value = "24.5px";
let numerical = parseFloat(value);
console.log(numerical);
document.getElementById("float").innerText = numerical;

// Арифметичні функції

console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2
