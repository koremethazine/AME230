function setup() {
  createCanvas(600, 600);

}

function draw() {
  const backBlue = color(100, 149, 237);
  background(backBlue);


  //legs
  //arc(x, y, w, h, start, stop, [mode], [detail])
  strokeWeight(8);
  stroke(0);
  const crimson = color(220, 20, 60);
  fill(crimson)
  //fix
  arc(180, 470, 250, 120, 0, 4, CHORD);
  arc(430, 460, 250, 120, 250, PI + QUARTER_PI, CHORD);


  //wand 
  
  //body
  strokeWeight(8);
  stroke(0);
  const kirbyPink = color(255, 105, 180);
  fill(kirbyPink);
  circle(300, 300, 400);

//arms 
  strokeWeight(6);
  stroke(0); 
  //(mouseX/width -.5) * 40.0
  arc(140, 180, 170, 190, 8.3, 5.6, open);
  arc(460, 300, 210, 180, 4.9, 7.7, open);


  //eyes
  strokeWeight(4);
  stroke(0);
  //blue part
  const eyeBlue = color(20,52,164);
  fill(eyeBlue);

  let eyeX = 250;
  let eyeY = 250;
  let eyeW = 50;
  let eyeH = 130;
  ellipse(eyeX,eyeY,eyeW,eyeH);
  ellipse(eyeX+100,eyeY,eyeW,eyeH);
  
  fill('black');
  //ellipse(x, y, w, [h])
  eyeY= eyeY-20;
  eyeH= eyeH-20;
  ellipse(eyeX, eyeY, eyeW, eyeH);
  ellipse(eyeX+100, eyeY, eyeW, eyeH);
  //inside
  eyeY= eyeY-20;
  eyeW= eyeW-10;
  eyeH= eyeH-40;
  fill('white');
  ellipse(eyeX,eyeY,eyeW,eyeH);
  ellipse(eyeX+100,eyeY, eyeW, eyeH);
 
//cheeks
  strokeWeight(0);
  const raspberry = color(227,11,92);
  fill(raspberry);
  let cheekY= 340;
  let cheekW = 50;
  let cheekH = 30;
  ellipse(220,cheekY,cheekW,cheekH);
  ellipse(380,cheekY,cheekW,cheekH);

  //mouth 
  strokeWeight(0);
  const mouthRed = color(129,19,49);
  fill(mouthRed);
  ellipse(300, 380, 120, 120);
  fill(raspberry);
  ellipse(300, 394,110,91.5);

  //arm moving 


}
