"use strict";

var key = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

var keys = {
	pressed: {},
	onDown: function onDown(event) {
		this.pressed[event.keyCode] = true;
	},
	onUp: function onUp(event) {
		this.pressed[event.keyCode] = false;
	}
};

var player;

function loop() {
	// Do stuff
	player.move(keys.pressed);
	player.render();
	requestAnimationFrame(loop);
}

function init() {
	player = new Player(document.querySelector(".js-player"), 0, 0);
	loop();
}

document.addEventListener("keydown", keys.onDown.bind(keys));
document.addEventListener("keyup", keys.onUp.bind(keys));
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map
