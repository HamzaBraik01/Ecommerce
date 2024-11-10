import carts from "./Data.js";
let id = 1;

const obj = carts.find(obj => obj.id == id);
console.log(obj)