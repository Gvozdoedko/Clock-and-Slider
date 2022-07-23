const btnLeft = document.getElementById(`btn-left`);
const btnRght = document.getElementById(`btn-rght`);
const imageElement = document.getElementById(`image`);
const timeDivEl = document.getElementById(`time`);

const spanHoursEl = document.getElementById(`spanHours`);
const spanMinEl = document.getElementById(`spanMin`);
const spanSecEl = document.getElementById(`spanSec`);

const hoursEl1 = document.getElementById(`hours1`);
const minEl1 = document.getElementById(`min1`);
const secEl1 = document.getElementById(`sec1`);

const hoursEl2 = document.getElementById(`hours2`);
const minEl2 = document.getElementById(`min2`);
const secEl2 = document.getElementById(`sec2`);

let myInterval = setInterval(changeImages, 3000);

let currentImage = 1;
const max = 9;
const min = 1;

btnRght.onclick = () => {
    moveRght();
};
btnLeft.onclick = () => {
    moveLeft();
};

function moveRght() {
    if (currentImage + 1 > max) {
        currentImage = 1;
    } else {
        currentImage++;
    }
    imageElement.setAttribute(`src`, `img/${currentImage}.jpg`);
    rebootInterval();
}
function moveLeft() {
    if (currentImage <= min) {
        currentImage = 5;
    } else {
        currentImage--;
    }
    imageElement.setAttribute(`src`, `img/${currentImage}.jpg`);
    console.log(currentImage);
    rebootInterval();
}

function changeImages() {
    if (currentImage + 1 > max) {
        currentImage = min;
    } else {
        currentImage++;
    }

    imageElement.setAttribute("src", `img/${currentImage}.jpg`);
}

function rebootInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(changeImages, 3000);
}

//time function

function currentTime() {
    let date = new Date();

    //for hours

    let hours = date.getHours();

    let newHr1 = parseInt(hours.toString()[0]);
    let newHr2 = parseInt(hours.toString()[1]);

    if (hours < 10) {
        hoursEl1.setAttribute(`src`, `img/0.png`);
        hoursEl2.setAttribute(`src`, `img/${hours}.png`);
    } else {
        hoursEl1.setAttribute(`src`, `img/${newHr1}.png`);
        hoursEl2.setAttribute(`src`, `img/${newHr2}.png`);
    }

    //for min

    let min = date.getMinutes();
    let newMin1 = parseInt(min.toString()[0]);
    let newMin2 = parseInt(min.toString()[1]);

    if (min < 10) {
        minEl1.setAttribute(`src`, `img/0.png`);
        minEl2.setAttribute(`src`, `img/${min}.png`);
    } else {
        minEl1.setAttribute(`src`, `img/${newMin1}.png`);
        minEl2.setAttribute(`src`, `img/${newMin2}.png`);
    }

    //for sec
    let sec = date.getSeconds();
    let newSec1 = parseInt(sec.toString()[0]);
    let newSec2 = parseInt(sec.toString()[1]);
    if (sec < 10) {
        secEl1.setAttribute(`src`, `img/0.png`);
        secEl2.setAttribute(`src`, `img/${sec}.png`);
    } else {
        secEl1.setAttribute(`src`, `img/${newSec1}.png`);
        secEl2.setAttribute(`src`, `img/${newSec2}.png`);
    }
}

let startClock = () => {
    setInterval(currentTime, 1000);
    currentTime();
};

startClock();
