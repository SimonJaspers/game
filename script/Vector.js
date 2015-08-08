class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	size() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
		
		return this;
	}
	
	distanceTo(vector) {
		return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
	}
}
