'use strict';
let sourses = [
    'i/airmax-jump.png',
    'i/airmax-on-foot.png',
    'i/airmax-playground.png',
    'i/airmax-top-view.png',
    'i/airmax.png',
];

let slider = document.getElementById('slider');
slider.src = sourses[0];
let i = 1;
function changeSlider() {
    slider.src = sourses[i];
    if (i <= 4) {
        i++;
    };
    if (i > 4) {
        i = 0;
    }
};

setInterval(changeSlider, 5000);