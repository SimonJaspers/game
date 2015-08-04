class PhysicsObject {
	
	constructor(width, height, mass, x, y) {
		this.width = width;
		this.height = height;
		this.mass = mass;
		
		this.forces = [
			function(vector) {
				var DRAG = 0.006;
				var dirX = vector.speed.x > 0 ? -1 : 1;
				var dirY = vector.speed.y > 0 ? -1 : 1;
				
				return new Vector(
					dirX * DRAG * Math.pow(vector.speed.x, 2),
					dirY * DRAG * Math.pow(vector.speed.y, 2)
				);
			}
		];
		
		this.position = new Vector(x, y);
		this.speed = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);
	}
	
	next() {
		
		var totalForce = this.forces
			.map(forceMethod => forceMethod(this))
			.reduce((force, sum) => sum.add(force), new Vector(0, 0));
		
		this.acceleration.x = totalForce.x / this.mass;
		this.acceleration.y = totalForce.y / this.mass;
				
		this.speed.add(this.acceleration);
		
		this.position.x += this.speed.x / 60;
		this.position.y += this.speed.y / 60;
	}
	
}