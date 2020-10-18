// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// let particlesArray;
//
// // mouse possition
// let mouse = {
//   x: null,
//   y: null,
//   radius: (canvas.height / 80) * (canvas.width / 80)
// }
//
// window.addEventListener("mousemove", function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });
//
// // create particles
// class Particle {
//   constructor(x, y, directionX, directionY, size, color) {
//     this.x = x;
//     this.y = y;
//     this.directionX = directionX;
//     this.directionY = directionY;
//     this.size = size;
//     this.color = color;
//   }
//
//   // draw individual particle
//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx.fillStyle = "#8C5523";
//     ctx.fill();
//   }
//   // check particle and mouse position, move and draw particle
//   update() {
//     // particle  is still in canvas
//     if (this.x > canvas.width || this.x < 0) {
//       this.directionX = -this.directionX;
//     }
//     if (this.y > canvas.height || this.y < 0) {
//       this.directionY = -this.directionY;
//     }
//
//     // collision detection - mouse position / particle possition
//     let dx = mouse.x - this.x;
//     let dy = mouse.y - this.y;
//     let distance = Math.sqrt(dx * dx + dy * dy);
//     if (distance < mouse.radius + this.size) {
//       if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
//         this.x += 10;
//       }
//       if (mouse.x > this.x && this.x > this.size * 10) {
//         this.x -= 10;
//       }
//       if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
//         this.y += 10;
//       }
//       if (mouse.y > this.y && this.y > this.size * 10) {
//         this.y -= 10;
//       }
//     }
//     // move particle
//     this.x += this.directionX;
//     this.y += this.directionY;
//     // draw particle
//     this.draw();
//   }
// }
//
// // create particle array
// function init() {
//   particlesArray = [];
//   let numberOfParticles = (canvas.height * canvas.width) / 9000;
//   for (let i = 0; i < numberOfParticles * 2; i++) {
//     let size = (Math.random() * 5) + 1;
//     let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
//     let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
//     let directionX = (Math.random() * 5) - 2.5;
//     let directionY = (Math.random() * 5) - 2.5;
//     let color = "#8C5523";
//     particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
//   }
// }
//
// // check if particles are close enough to draw the line
// function connect() {
//   let opacityValue = 1;
//   for (let i = 0; i < particlesArray.length; i++) {
//     for (let j = i; j < particlesArray.length; j++) {
//       let distance = ((particlesArray[i].x - particlesArray[j].x) *
//                       (particlesArray[i].x - particlesArray[j].x)) +
//                       ((particlesArray[i].y - particlesArray[j].y) *
//                       (particlesArray[i].y - particlesArray[j].y));
//       if (distance < (canvas.width / 7) * (canvas.height / 7)) {
//         opacityValue = 1 - (distance / 20000);
//         ctx.strokeStyle = `rgba(140, 85, 31, ${opacityValue})`;
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
//         ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
//         ctx.stroke();
//       }
//     }
//   }
// }
//
// // animation logo
// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//
//   for (let i = 0; i < particlesArray.length; i++) {
//     particlesArray[i].update();
//   }
//   connect();
// }
//
// // rezise event
// window.addEventListener("rezise", function() {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
//   init();
// });
//
// // mouse out event
// window.addEventListener("mouseout", function() {
//   mouse.x = undefined;
//   mouse.y = undefined;
// });
//
//
// init();
// animate();
