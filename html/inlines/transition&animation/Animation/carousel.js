let percent = 6.25;
let width = 131.5;
let x = 0;
let y = 0;

for (let i = 0; i < 16; i++) {
  console.log(`
        ${percent * i}% {
            background-position: -${width * x}px -${width * y}px;
        }
    `);

  x++;

  if ((i + 1) % 4 === 0) {
    y++;
    x = 0;
  }
}
