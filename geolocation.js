"use strict";

// start server and use xcode > developer tools > simulator

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => { // getPosition only get one, watch over time
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`; // degrees from north
}, (err) => {
  console.err(err);
  alert('You need to enable geolaction');
}); 
  