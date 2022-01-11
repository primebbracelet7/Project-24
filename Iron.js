class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
		var options={
			restitution:0.8,
			friction:3,
			density:30
		}
		
		
		this.body=Bodies.rectangle(x, y,w,h, options)
        this.w=w
        this.h=h
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
			rect(0,0,this.w,this.h)
			pop()
	}
}