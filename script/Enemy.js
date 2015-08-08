class Enemy extends PhysicsObject {
	
	constructor(element, x, y) {
		super(30, 30, 5, x, y);
		
		this.element = element;
		
		// Gravity!
		//this.forces.push(() => new Vector(0, this.mass * 9.81));
		this.forces.pop();
	}
	
	render() {
		this.next();
		this.element.style.webkitTransform = `translate3d(${this.position.x - (this.width / 2)}px, ${this.position.y - (this.height / 2)}px, 0)`;
	}
}