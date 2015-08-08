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
			var DRAG = 0.01;
			var dirX = vector.speed.x > 0 ? -1 : 1;
			var dirY = vector.speed.y > 0 ? -1 : 1;

			return new Vector(dirX * DRAG * Math.pow(vector.speed.x, 2), dirY * DRAG * Math.pow(vector.speed.y, 2));
		}];

		this._collisionObjects = [];

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

			this._collisionObjects.forEach(function (object) {
				var limit = (_this.width + object.width) / 2;
				var distance = _this.position.distanceTo(object.position) || 0.01;
				if (distance < limit) {
					var SPRING_CONSTANT = 300;
					var springForce = (limit - distance) * SPRING_CONSTANT;
					var fx = (_this.position.x - object.position.x) / distance * springForce;
					var fy = (_this.position.y - object.position.y) / distance * springForce;
					totalForce.add(new Vector(fx, fy));
				}
			});

			this.acceleration.x = totalForce.x / this.mass;
			this.acceleration.y = totalForce.y / this.mass;

			this.speed.add(this.acceleration);

			this.position.x += this.speed.x / 60;
			this.position.y += this.speed.y / 60;
		}
	}, {
		key: "addCollisionObject",
		value: function addCollisionObject(object) {
			this._collisionObjects.push(object);
		}
	}, {
		key: "removeCollisionObject",
		value: function removeCollisionObject(object) {
			var index = this._collisionObjects.indexOf(object);

			if (index !== -1) {
				this._collisionObjects.splice(index, 1);
			}
		}
	}]);

	return PhysicsObject;
})();
//# sourceMappingURL=PhysicsObject.js.map
