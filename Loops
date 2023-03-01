// sketch.js

function setup() {
  createCanvas(600, 600);

}

function draw() {
  
  background(217,111,208);
  //background(161,87,154);
  
//rectangles & colors
let x = 0;
let y = 0;
let padding = 3;
let size = 40;
let rowCount =0;

while (y < height){
  x = 0;
  if (rowCount % 2 == 0) {
//
  }
  else {
//
  }

  let columnCount =0;
  while (x < width)
  {
    let x1 = x+ padding;
    let y1 = y+ padding;
    let size1 = size - (padding * 2);

    stroke(0);
    let r = random(90,255);
    let g = random(40,55);
    let b = random(80,120);
    

    fill(r,g,b);

    strokeWeight(3);
    rect(x1,y1,size1,size1);
  
    x = x + size;
    columnCount = columnCount + 1;
  }
   
  y = y + size ;
  rowCount = rowCount + 1;
}
noLoop();

}

