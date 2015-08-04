module.exports = function(grunt) {
  	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
		options: {
			esnext: true
		},
		allFiles: [
			'script/*.js'
		]
	},
	babel: {
	  	options: {
	        sourceMap: true
	    },
	    dist: {
	        files: {
				'script/compiled/Vector.js': 'script/Vector.js',
				'script/compiled/PhysicsObject.js': 'script/PhysicsObject.js',
				'script/compiled/Player.js': 'script/Player.js',
				'script/compiled/main.js': 'script/main.js'
	        }
	    }
	}
	});
	
	
	// Default task(s).
	grunt.registerTask('default', ['jshint:allFiles', 'babel']);
};