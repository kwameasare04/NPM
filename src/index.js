const moment = require("moment");//import external packacge

const semver = require("semver");

const range = semver.Range(); // assign 

let day = moment().format("dddd");

console.log(day);// Wednesday

const a = 10;
const b = 12;

console.log(semver.gt("1.2.3","9.8.7")); // a method that compares a version to see if it is greater than // returns false

