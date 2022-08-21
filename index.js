myName.innerHTML = prompt("What is your name?");
let nameResult = document.querySelector("#myName");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + "   " + day;
