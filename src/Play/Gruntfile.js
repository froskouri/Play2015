/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	// load Grunt plugins from NPM
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// configure plugins
	grunt.initConfig({
		concat: {
			options:{
				separator: ';',
			},
			dist: {
				src: ['bower_components/angular/angular.js', 'bower_components/angular-resource/angular-resource.js', 'bower_components/angular-route/angular-route.js'],
				dest: 'Scripts/external-scripts.js',
			}
		},
		
		uglify: {
			my_target: {
				files: {
					'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js'],
					'wwwroot/externals.js': ['Scripts/external-scripts.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['Scripts/**/*.js', 'Styles/**/*.scss'],
				tasks: ['build']
			}
		},
		
		sass: {
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         // Dictionary of files
					'wwwroot/main.css': 'Styles/main.scss',       // 'destination': 'source'
				}
			}
		}
	});

	// define tasks
	grunt.registerTask('build', ['sass', 'concat', 'uglify', 'watch']);
};