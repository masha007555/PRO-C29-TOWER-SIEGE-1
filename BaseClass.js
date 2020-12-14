class BaseClass{
  constructor(x, y, width, height, angle){
    var options = {
      restitution:0.3,
      friction:1.5,
      density:1
    }

    this.boxObject = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.boxObject);
  }

  display(){
    push();
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.boxObject.position.x,this.boxObject.position.y, this.width, this.height);
    pop();
  }
}