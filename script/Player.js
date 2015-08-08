class Player extends PhysicsObject {
	constructor(element, x, y) {
		super(30, 30, 100, x, y);

		this.element = element;	
		
		this.throttle = 300; // N
		this.throttleForce = new Vector(0, 0);
		this.forces.push(() => this.throttleForce);
	}
	
	move(keysDown) {
		this.throttleForce.x = keysDown[key.LEFT] ? -this.throttle : keysDown[key.RIGHT] ? this.throttle : 0;
		this.throttleForce.y = keysDown[key.UP] ? -this.throttle : keysDown[key.DOWN] ? this.throttle : 0;
	}
	
	render() {
		this.next();
		
		this.element.style.webkitTransform = `translate3d(${this.position.x - (this.width / 2)}px, ${this.position.y - (this.height / 2)}px, 0)`;
	}
	
}