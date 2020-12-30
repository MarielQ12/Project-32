class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0,
          'density':1.0
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if (this.body.speed<3){   
        var pos =this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
       }
      else { 
        push()
        this.Visibility -= 10
        World.remove(world, this.body);
         tint (255,this.visibility);
        pop ()
        }
    }
    score(){
      if(this.Visiblity<0&&this.Visiblity>-1000){
      score++
      }
  };
}