class Stone {

constructor(x,y,diameter){
    var options = {
    isStatic:false,
    restitution:0,
    friciton:1,
    density:1.2
}
this.body = Bodies.cricle(x,y,diameter,options);
this.diameter=diameter;
this.image = loadImage("stone.png");
World.add(world,this.body);
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    this.image(this.image,0,0,this.body.position.y);
    pop();
}
}