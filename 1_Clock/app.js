setInterval(setClock, 1000);

const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function setClock() {
    const currentDate = new Date();

    const secondsRation = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRation + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsRation);
    setRotation(minutesHand, minutesRatio);
    setRotation(hoursHand, hoursRatio);
}

setClock();

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}