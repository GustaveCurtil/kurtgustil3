

let angle = 0;
let wave = []

let lang;
let kort;

let bediening = 30;
let slider;
let parentElement = document.getElementById('sinusanimatie'); // replace with your parent element's ID
let parentWidth = parentElement.clientWidth;
let parentHeight = parentElement.clientHeight;

function setup() {
  let parentElement = document.getElementById('sinusanimatie'); // replace with your parent element's ID

  // Calculate the actual inner height
  let parentWidth = parentElement.clientWidth;
  let parentHeight = parentElement.clientHeight + 15;

  slider = createSlider(1, 20, 4);
  slider.size(parentWidth);
  slider.parent('sinusanimatie');


  // Create the canvas with the width of the parent and a height of 200 pixels
  let canvas = createCanvas(parentWidth, parentHeight);
  canvas.parent('sinusanimatie');
}

function draw() {

  let parentElement = document.getElementById('sinusanimatie'); // replace with your parent element's ID
  let parentWidth = parentElement.clientWidth;
  let parentHeight = parentElement.clientHeight - 15;

  frameRate(30);
  lang = 300;
  kort = parentHeight;

  translate(lang/3,kort/2);

  background(0);
  let x = 0;
  let y = 0;

  for (i=0; i<slider.value(); i++) {
      let n = 1 + 2 * i;
      let prevX = x;
      let prevY = y;
      
      let radius = (lang / 6)/n;
      x += radius * cos(angle * n);
      y += radius * sin(angle * n);

      noFill();
      stroke(255);
      ellipse(prevX,prevY, radius * 2);
      line(prevX, prevY, x, y);
  }

  wave.unshift(y);
  
  translate((lang/3), 0)
  beginShape()
  for (i=0; i<(parentWidth - (lang/2)); i++) {
      vertex(i, wave[i])
  }
  endShape()
  line(x-(lang/3), y, 0, wave[0])
  
  angle += 0.05
}