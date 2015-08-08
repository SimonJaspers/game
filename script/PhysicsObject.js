class PhysicsObject {
	constructor(width, height, mass, x, y) {
		this.width = width;
		this.height = height;
		this.mass = mass;
		
		this.forces = [
			function(vector) {
				var DRAG = 0.01;
				var dirX = vector.speed.x > 0 ? -1 : 1;
				var dirY = vector.speed.y > 0 ? -1 : 1;
				
				return new Vector(
					dirX * DRAG * Math.pow(vector.speed.x, 2),
					dirY * DRAG * Math.pow(vector.speed.y, 2)
				);
			}
		];
		
		this._collisionObjects = [];
		
		this.position = new Vector(x, y);
		this.speed = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);
	}
	
	next() {
		var totalForce = this.forces
			.map(forceMethod => forceMethod(this))
			.reduce((force, sum) => sum.add(force), new Vector(0, 0));
		
		this._collisionObjects.forEach(object => {
			let limit = (this.width + object.width) / 2;
			let distance = this.position.distanceTo(object.position) || 0.01;
			if (distance < limit) {
				let SPRING_CONSTANT = 300;
				let springForce = (limit - distance) * SPRING_CONSTANT;
				let fx = ((this.position.x - object.position.x) / distance) * springForce;
				let fy = ((this.position.y - object.position.y) / distance) * springForce;
				totalForce.add(new Vector(fx, fy));
			}
		});
		
		this.acceleration.x = totalForce.x / this.mass;
		this.acceleration.y = totalForce.y / this.mass;
				
		this.speed.add(this.acceleration);
		
		this.position.x += this.speed.x / 60;
		this.position.y += this.speed.y / 60;
	}
	
	addCollisionObject(object) {
		this._collisionObjects.push(object);
	}
	
	removeCollisionObject(object) {
		var index = this._collisionObjects.indexOf(object);
		
		if (index !== -1) {
			this._collisionObjects.splice(index, 1);			
		}
	}
	
}