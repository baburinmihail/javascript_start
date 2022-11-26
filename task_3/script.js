const GREEN_l = document.querySelector('#GREEN_l');
const YELLOW_l = document.querySelector('#YELLOW_l');
const RED_l = document.querySelector('#RED_l');
let trafficLight = document.querySelector('#ilusivblock')

//желтый цвет
function makeYellow() {
    GREEN_l.style.background = ('black');
    RED_l.style.background = ('black');
    YELLOW_l.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

//красный цвет
function makeRed() {
    YELLOW_l.style.background = ('black');
    GREEN_l.style.background = ('black');
    RED_l.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);

}

//зеленный цвет
function makeGreen() {
    YELLOW_l.style.background = ('black');
    RED_l.style.background = ('black');
    GREEN_l.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

trafficLight.addEventListener('click', makeYellow);
trafficLight.addEventListener('click', makeRed);
trafficLight.addEventListener('click', makeGreen);







