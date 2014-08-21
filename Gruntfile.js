module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      js: {
        files: 'src/js/**/*.js',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        transform: [
            require('grunt-react').browserify
        ]
      },
      dist: {
        src: 'js/main.js',
        dest: 'main.compiled.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('build', ['browserify']);

};
