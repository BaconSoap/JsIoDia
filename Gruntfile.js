module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    srcFileGlob: "src/**/*.ts",
    tslint: {
      options: {
        configuration: grunt.file.readJSON('tslint.json')
      },
      files: {
        src: ['<%= srcFileGlob %>', 'test/**/*.ts']
      }
    },
    typescript: {
      base: {
        src: ['src/main.ts'],
        dest: 'build/<%= pkg.name %>.js',
        options: {
          declaration: true
        }
      },
      //for tests, build them one by one
      tests: {
        src: ['test/**/*.ts']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'build/<%= pkg.name %>.min.js': ['<%= typescript.base.dest %>']
        }
      }
    },
    watch: {
      src: {
        files: ['<%= srcFileGlob %>'],
        tasks: ['base', 'karma:unit:run']
      },
      tests: {
        files: ['test/unit/**/*.ts'],
        tasks: ['typescript:tests','karma:unit:run']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      },
      now: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('base', ['tslint', 'typescript', 'uglify']);
  grunt.registerTask('default', ['base', 'karma:now']);
  grunt.registerTask('w', ['karma:unit', 'watch']);
  grunt.registerTask('wt', ['karma:unit', 'watch:tests']);
};
