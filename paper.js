class paper{
    constructor(){
        var options={
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density: 1.2

        }
        this.body = Matter.Bodies.circle(100 , 620, 5, options );

        World.add(world,this.body)
    }
    display(){
     
        push();
        
        fill("blue");
      ellipse(100,620,this.radius);
        pop();
      }
    };
