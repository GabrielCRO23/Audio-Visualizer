const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(xLocation, yLocation, radius, color) {
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.xLocation, this.yLocation, this.radius, 0, 2 * Math.PI); //x location, y location, radius, start angle, end angle
    ctx.stroke();
    ctx.fill();
  }
}

let particles = [];

let createParticle = function (particle) {
  particle.draw();
};

for (let i = 0; i < 1; i++) {
  let random_x = 20 + 1 * i;
  let random_y = Math.random() * canvas.height;

  let my_particle = new Particle(random_x, random_y, 20, "white");
  particles.push(my_particle);
  createParticle(particles[i]);
}

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
