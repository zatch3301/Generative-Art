var w = [],x=0,y=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 80; i++) {
    w[i] = new walker();
  }
  background(0);
}

function draw() {
  for (var i = 0; i < 80; i++) {
    w[i].update();
    w[i].display();
  }
}

function walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);

  this.update = function() {
    this.acc = createVector(random(-.1, .1), random(-.1, .1));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    if (y < 0) {
      fill(x, 0, 0, 0);
    } else {
      fill(x, 0, 0, 1);
    }
    stroke(255, 0, 255, 1)
    noFill();
    ellipse(this.pos.x, this.pos.y, y, y);
    x += 1;
    y -= 0.007;
  }
}

function keyPressed() {
    if (keyCode === 13) {
      saveCanvas('canvas-' + frameCount, 'jpg');
    }
}