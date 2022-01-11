class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
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
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
			rect(0,0,this.w,this.h)
			pop()
	}

}