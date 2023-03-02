const dot = document.querySelector("#dot");

let x = 0;
let y = 0;

const step = 5;
const interval = setInterval(() => {
  x += step;

  dot.style.bottom = `${x}px`;
  dot.style.left = `${x*1.9}px`;



  if (x >= window.innerWidth) {
    clearInterval(interval);
  }
}, 50);
