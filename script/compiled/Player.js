"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = (function (_PhysicsObject) {
	_inherits(Player, _PhysicsObject);

	function Player(element, x, y) {
		var _this = this;

		_classCallCheck(this, Player);

		_get(Object.getPrototypeOf(Player.prototype), "constructor", this).call(this, 30, 30, 100, x, y);

		this.element = element;

		this.throttle = 100; // N
		this.throttleForce = new Vector(0, 0);
		this.forces.push(function () {
			return _this.throttleForce;
		});
	}

	_createClass(Player, [{
		key: "move",
		value: function move(keysDown) {
			this.throttleForce.x = keysDown[key.LEFT] ? -this.throttle : keysDown[key.RIGHT] ? this.throttle : 0;
			this.throttleForce.y = keysDown[key.UP] ? -this.throttle : keysDown[key.DOWN] ? this.throttle : 0;
		}
	}, {
		key: "render",
		value: function render() {
			this.next();

			this.element.style.webkitTransform = "translate3d(" + this.position.x + "px, " + this.position.y + "px, 0)";
		}
	}]);

	return Player;
})(PhysicsObject);
//# sourceMappingURL=Player.js.map
