class Ground{

    constructor(){

        var options = {
            isStatic:true,
            fricition:0.4
        }
        this.body = Bodies.rectangle(500,625,1200,20,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("sliver");
        rect(500,625,1200,20);
    }
}