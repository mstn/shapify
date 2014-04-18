module.exports = function(grunt) {

  var _   = require('underscore'),
      sh  = require('execSync');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task(s).
  grunt.registerTask('default', 'Compressing gpx files.', function() {
    var fs = require('fs'),
        dirs = fs.readdirSync('./raw');

    _.each( dirs, function(file){
    	var cmd = 'python2.7 ./bin/gpx_reduce.py raw/' + file + ' -o compressed/' + file,
          result;
      console.log('Compressing ' + file + '. Please wait...');
    	result = sh.exec(cmd);
      console.log( result.stdout );
    
    });
  });

};