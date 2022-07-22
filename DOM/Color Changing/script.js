
// document.getElementsByTagName();
// document.getElementById();
// document.getElementsByClassName();

// document.getElementsByClassName("span")[0];
// document.getElementsByTagName("span");

// document.querySelector(".main");
// document.querySelector("#main");
// document.querySelectorAll('.main');


function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getSpan = document.getElementsByClassName("span")[0];

// getSpan.style.backgroundColor = 'green';
// getSpan.style.backgroundColor = 'yellow';
// getSpan.style.border


const colors = ['black', 'yellow', 'green', 'blue', 'red'];

// 0-4



const getButton = document.getElementById("btn");

// function changeColor() {
//     getSpan.style.backgroundColor = colors[getRandInt(0, 4)];
// }

// getButton.addEventListener("click", changeColor);

// getButton.addEventListener("click", () => {
    
// });

setInterval(() => {
    getSpan.style.backgroundColor = colors[getRandInt(0, 4)]; 
}, 1000);