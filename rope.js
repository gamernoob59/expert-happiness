class Sling{
	constructor(bodyA, pointB)
	{
		//this.offsetX=offsetX
		//this.offsetY=offsetY
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness: 1,
			angularStiffness: 1,
			length: 220
			//pointB:{x:this.offsetX, y:this.offsetY}
		};
		//console.log(options);
		this.pointB = pointB;
		this.pointX = bodyA.x;
		this.pointY = bodyA.y - 250;
		this.sling = Constraint.create(options);
		World.add(world, this.sling)
	}

	display()
	{
		if (this.sling.bodyA) {
			var pointA = this.sling.bodyA.position;
			var pointB = this.sling.pointB;
			push();
			strokeWeight(3.5);
			stroke("#fff");
			line(pointB.x,pointB.y,pointA.x,pointA.y);
			pop();
		}

	}

}