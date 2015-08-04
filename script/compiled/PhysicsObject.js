"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhysicsObject = (function () {
	function PhysicsObject(width, height, mass, x, y) {
		_classCallCheck(this, PhysicsObject);

		this.width = width;
		this.height = height;
		this.mass = mass;

		this.forces = [function (vector) {
			var DRAG = 0.006;
			var dirX = vector.speed.x > 0 ? -1 : 1;
			var dirY = vector.speed.y > 0 ? -1 : 1;

			return new Vector(dirX * DRAG * Math.pow(vector.speed.x, 2), dirY * DRAG * Math.pow(vector.speed.y, 2));
		}];

		this.position = new Vector(x, y);
		this.speed = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);
	}

	_createClass(PhysicsObject, [{
		key: "next",
		value: function next() {
			var _this = this;

			var totalForce = this.forces.map(function (forceMethod) {
				return forceMethod(_this);
			}).reduce(function (force, sum) {
				return sum.add(force);
			}, new Vector(0, 0));

			this.acceleration.x = totalForce.x / this.mass;
			this.acceleration.y = totalForce.y / this.mass;

			this.speed.add(this.acceleration);

			this.position.x += this.speed.x / 60;
			this.position.y += this.speed.y / 60;
		}
	}]);

	return PhysicsObject;
})();
//# sourceMappingURL=PhysicsObject.js.map
