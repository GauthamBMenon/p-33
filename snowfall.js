class Snowfall{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("snow4.webp ");
        World.add(world, this.body);
      }
      display(){
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
      }
}