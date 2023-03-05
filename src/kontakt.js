const sum  = require("./sum").sum;
import { sum2 } from "./sum2";
import { style } from './css/index.scss';
import Icon from "./assets/img/proba.png";

console.log("Hello World");
console.log(sum(2,3));
console.log(sum2(2,3));

let heading = document.querySelector("#demo"),
    sumValue = sum(10,5);

heading.innerText = `10+10= ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("div").append(myIcon);
document.querySelector('div').classList.add("change");