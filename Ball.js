class Ball{
    constructor(x,y,r){
        var options = {
         'density':1.5,
         'frictionAir': 0.005,
          };
    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    this.image = loadImage("polygon.png")
    World.add(world, this.body);
    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
      stroke('blue')
      fill('white')
    imageMode(CENTER);
    image(this.image,0,0, this.r/2, this.r/2);
    pop ();

  }
}

