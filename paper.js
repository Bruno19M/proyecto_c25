class Paper{
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            density: 1,
            friction: 0,
            isStatic: false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.r -20)/2,options)
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill("white")
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}