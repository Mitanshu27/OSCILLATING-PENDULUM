class Ball
{
    constructor(x,y){
    var options = {
        restitution : 1.0,
        density : 1.0
    }
          
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("green");
        ellipse(pos.x,pos.y,40);
        pop();
    }
} 