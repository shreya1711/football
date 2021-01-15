class CompPlayer {
    constructor(x,y,width,height){
        var options = {
           'restitution':0.8,
            //'friction':1.0,
            'density':1.0,
           // isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
   this.image = loadImage('player2.jpg')
        World.add(world, this.body);
      }

      move(a,b){
        var pos = this.body.position;
        //console.log(pos)
        pos.x = pos.x + a;
        pos.y = pos.y - b;
      //  console.log(pos)
      }

      display(){
       // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.width, this.height);
       // rectMode(CENTER);
       // rect( 0,0, this.width, this.height);
        pop();
      }
     

      


    }
