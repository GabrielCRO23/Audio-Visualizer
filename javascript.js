const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audio1 = new Audio();
audio1.src = "mao.mp3";
audioSource = audioCtx.createMediaElementSource(audio1);
audio1.play();
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
//const barWidth = canvas.width / bufferLength;
console.log(dataArray[0]);
console.log(canvas.height);

class Particle {
  constructor(xLocation, yLocation, radius, color) {
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    this.radius = radius;
    this.color = color;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.xLocation, this.yLocation, this.radius, 0, 2 * Math.PI); //x location, y location, radius, start angle, end angle
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  update() {
    analyser.getByteFrequencyData(dataArray);
    this.yLocation = -dataArray[10] + canvas.height / 2;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.draw(ctx);

    console.log(dataArray[10]);
  }
}

let particles = [];
let createParticle = function (particle) {
  particle.draw(ctx);
  particle.update();
};

/*

let x = 100; // let x = 5 + 10 * i;
let y = canvas.height / 2;
//console.log(dataArray[0]);
let speed = dataArray[0];
let my_particle = new Particle(x, y, 5, "white", 0, 0);
my_particle.draw(ctx);
*/

for (let i = 0; i < canvas.width / 10; i++) {
  //i < canvas.width
  console.log(i);
  let x = 5 + 10 * i; // let x = 5 + 10 * i;
  let y = canvas.height / 2;

  let my_particle = new Particle(x, y, 5, "white"); // let my_particle = new Particle(x, y, 5, "white");
  particles.push(my_particle);
  createParticle(particles[i]);
}

let updateParticle = function () {
  requestAnimationFrame(updateParticle);
};

updateParticle();

/*

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(10, 75, 10, 0, 2 * Math.PI); //x location, y location, radius, start angle, end angle
ctx.stroke();
ctx.fill(); //fills circle with fillStyle color

ctx.beginPath();
ctx.arc(30, 75, 10, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
ctx.stroke();
ctx.fill();

ctx.arc(50, 75, 10, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
ctx.stroke();
ctx.fill();

ctx.arc(70, 75, 10, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
ctx.stroke();
ctx.fill();

ctx.arc(90, 75, 10, 0, 2 * Math.PI); //x, y, radius, start angle, end angle
ctx.stroke();
ctx.fill();

/*
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
*/
/*

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const radius = 70;

class Particle {
  constructor() {
    this.particleWidth = 100;
    this.particleHeight = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.directionY; // = data goes here
  }
}

ctx.beginPath();
ctx.arc(Particle.x, Particle.y, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "#003300";
ctx.stroke();
*/

/*
let audio1 = new Audio();
audio1.src = "mao.mp3";
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
audio1.play();
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 128;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width / bufferLength;



const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

audio1.play();
audioSource = audioCtx.createMediaElementSource(audio1);
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 128;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width / bufferLength;

function animate() {
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    ctx.fillStyle = "white";
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth;
  }

  requestAnimationFrame(animate);
}

animate();

*/
