'use strict';
let photos = [
    'i/breuer-building.jpg',
    'i/guggenheim-museum.jpg',
    'i/headquarters.jpg',
    'i/IAC.jpg',
    'i/new-museum.jpg',
];

let currentPhoto = document.getElementById('currentPhoto');
let prevPhoto = document.getElementById('prevPhoto');
let nextPhoto = document.getElementById('nextPhoto');

prevPhoto.addEventListener('click', () => showPrevPhoto());
nextPhoto.addEventListener('click', () => showNextPhoto());
let i = 0;
currentPhoto.src = photos[i];

function showPrevPhoto() {
    if (i === 0) {
        i = 4;
    } else {
        i--;
    };
    currentPhoto.src = photos[i];
};

function showNextPhoto() {
    if (i === 4) {
        i = 0;
    } else {
        i++;
    }
    currentPhoto.src = photos[i];
};

