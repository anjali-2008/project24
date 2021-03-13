class rubber{
    constructor(x,y,width){
        var options={
            'restitution':0.8,
            'friction': 4,
            'density': 1,
        }
        this.body=Bodies.circle(x,y,width,options);
        this.width=width;
        World . add(world,this.body)
    }
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(2);
     fill("red");
     stroke("red");
     ellipse(0,0,this.width);
     pop ()
    }
}