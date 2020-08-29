"use strict";
import { Squirrel, FlyingSquirrel } from "./Squirrel.js";
import { User, UberAdmin, Admin } from "./User.js";
import { MyString, myString } from "./MyString.js";
/* 
function Squirrel(name, age) {
  //SquirrelClass.call(this, name, age) // super

  this.name = name;
  this.age = age;
}
function SquirrelAbilities() {
  this.sayHi = function () {
    return `hi, my name is ${this.name}`;
  };
}
Squirrel.prototype = new SquirrelAbilities(); */

const sq = new Squirrel("Squirrel", 4);
const flyingSq = new FlyingSquirrel("Max", 5, true);

const user = new User("user", 19, true);
const admin = new Admin("admin", 22, false);
const uberAdmin = new UberAdmin("uAdm", 30, true);

console.log(user);
console.log(myString());

const str = "Hello sample text";
console.log(MyString.reverse(str));
console.log(MyString.ucFirst(str));
console.log(MyString.ucWords(str));
