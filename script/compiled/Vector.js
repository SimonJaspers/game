"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = (function () {
	function Vector(x, y) {
		_classCallCheck(this, Vector);

		this.x = x;
		this.y = y;
	}

	_createClass(Vector, [{
		key: "size",
		value: function size() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}
	}, {
		key: "add",
		value: function add(vector) {
			this.x += vector.x;
			this.y += vector.y;

			return this;
		}
	}, {
		key: "distanceTo",
		value: function distanceTo(vector) {
			return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
		}
	}]);

	return Vector;
})();
//# sourceMappingURL=Vector.js.map
